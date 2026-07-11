"use client";

import { useState } from "react";
import { useDb, Inquiry, HeroSlide, ClientPartner } from "@/context/DbContext";
import { Project } from "@/data/projects";
import { uploadImageAction } from "@/app/actions/upload";
import { CategoryItem, JourneyStep } from "@/app/actions/db";

type AdminTab = "dashboard" | "logo" | "projects" | "inquiries" | "clients" | "slider" | "categories" | "journey";

export default function AdminPage() {
  const {
    logo,
    projects,
    inquiries,
    clients,
    slides,
    categories,
    journeySteps,
    healthcareBg,
    isLoaded,
    updateLogo,
    addProject,
    updateProject,
    deleteProject,
    deleteInquiry,
    markInquiryRead,
    addClient,
    deleteClient,
    updateSlide,
    updateHealthcareBg,
    updateCategory,
    updateJourney,
  } = useDb();

  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onSuccess: (url: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadImageAction(formData);
      if (result.success && result.url) {
        onSuccess(result.url);
      } else {
        alert("Upload failed: " + result.error);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Project Form State
  const [isEditingProj, setIsEditingProj] = useState(false);
  const [editingProjId, setEditingProjId] = useState("");
  const [projForm, setProjForm] = useState({
    title: "",
    category: "residential" as "healthcare" | "commercial" | "residential",
    location: "",
    description: "",
    image: "/images/residential.jpg",
    specsString: "",
  });
  // Client Form State
  const [clientForm, setClientForm] = useState({ name: "", role: "", logo: "" });
  // Slider Edit State
  const [editingSlideIdx, setEditingSlideIdx] = useState<number | null>(null);
  const [slideForm, setSlideForm] = useState<HeroSlide>({
    image: "",
    category: "",
    title: "",
    subtitle: "",
    linkText: "",
    linkHref: "",
  });

  // Product Category Edit State
  const [editingCatId, setEditingCatId] = useState<string | null>(null);
  const [catForm, setCatForm] = useState({ title: "", description: "", image: "" });

  // Journey Step Edit State
  const [editingJourneyId, setEditingJourneyId] = useState<number | null>(null);
  const [journeyForm, setJourneyForm] = useState({ title: "", subtitle: "", description: "", image: "", accent: "" });

  // Handle Loading Gate
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-stone-300 border-t-accent rounded-full animate-spin mx-auto" />
          <p className="font-serif text-sm text-stone-500 tracking-wider">Loading KhashabSA CMS...</p>
        </div>
      </div>
    );
  }

  // Project Submit Handler
  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const specs = projForm.specsString
      ? projForm.specsString.split(",").map((s) => s.trim()).filter(Boolean)
      : [];

    const projectData = {
      title: projForm.title,
      category: projForm.category,
      location: projForm.location,
      description: projForm.description,
      image: projForm.image,
      specs,
    };

    if (isEditingProj) {
      updateProject({ ...projectData, id: editingProjId });
      alert("Project updated successfully!");
    } else {
      addProject(projectData);
      alert("Project added successfully!");
    }

    // Reset Form
    setIsEditingProj(false);
    setEditingProjId("");
    setProjForm({
      title: "",
      category: "residential",
      location: "",
      description: "",
      image: "/images/residential.jpg",
      specsString: "",
    });
  };

  const startEditProject = (p: Project) => {
    setIsEditingProj(true);
    setEditingProjId(p.id);
    setProjForm({
      title: p.title,
      category: p.category,
      location: p.location,
      description: p.description,
      image: p.image,
      specsString: p.specs ? p.specs.join(", ") : "",
    });
  };

  // Client Submit Handler
  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientForm.name.trim() && clientForm.role.trim()) {
      addClient(clientForm);
      setClientForm({ name: "", role: "", logo: "" });
      alert("Client partner added successfully!");
    }
  };

  // Slider Submit Handler
  const startEditSlide = (idx: number, s: HeroSlide) => {
    setEditingSlideIdx(idx);
    setSlideForm(s);
  };

  const handleSlideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSlideIdx !== null) {
      updateSlide(editingSlideIdx, slideForm);
      setEditingSlideIdx(null);
      alert(`Hero Slide ${editingSlideIdx + 1} updated successfully!`);
    }
  };

  // Category Submit Handler
  const startEditCat = (cat: CategoryItem) => {
    setEditingCatId(cat.id);
    setCatForm({ title: cat.title, description: cat.description, image: cat.image });
  };

  const handleCatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCatId) {
      updateCategory(editingCatId, catForm);
      setEditingCatId(null);
      alert("Category updated successfully!");
    }
  };

  // Journey Submit Handler
  const startEditJourney = (step: JourneyStep) => {
    setEditingJourneyId(step.id);
    setJourneyForm({
      title: step.title,
      subtitle: step.subtitle,
      description: step.description,
      image: step.image,
      accent: step.accent,
    });
  };

  const handleJourneySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingJourneyId !== null) {
      updateJourney(editingJourneyId, journeyForm);
      setEditingJourneyId(null);
      alert(`Journey Step ${editingJourneyId} updated successfully!`);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col lg:flex-row">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full lg:w-64 bg-stone-900 text-stone-300 border-b lg:border-b-0 lg:border-r border-stone-800 flex flex-col shrink-0">
        <div className="p-6 border-b border-stone-800">
          <span className="font-serif text-xl tracking-widest text-white uppercase font-semibold">
            Khashab<span className="text-accent font-light">SA</span>
          </span>
          <span className="block text-[9px] font-bold tracking-widest uppercase text-accent mt-1">
            Admin Panel CMS
          </span>
        </div>

        <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible p-4 gap-1">
          {[
            { id: "dashboard", label: "Dashboard", icon: "📊" },
            { id: "logo", label: "Branding & Banner", icon: "🏷️" },
            { id: "projects", label: "Manage Projects", icon: "📁" },
            { id: "categories", label: "Product Gallery", icon: "🚪" },
            { id: "journey", label: "Journey Steps", icon: "🪵" },
            { id: "inquiries", label: `B2B Inquiries (${inquiries.filter(i => !i.read).length})`, icon: "📨" },
            { id: "clients", label: "Clients & Partners", icon: "🤝" },
            { id: "slider", label: "Hero Slider", icon: "🎞️" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`flex items-center space-x-3 px-4 py-3 text-xs font-semibold uppercase tracking-wider rounded-none transition-colors shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-accent text-white"
                  : "hover:bg-stone-850 hover:text-white"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTAINER */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="mb-10 pb-4 border-b border-stone-200 flex justify-between items-center">
          <h1 className="text-3xl font-serif text-primary uppercase tracking-wide">
            {activeTab === "dashboard" && "Dashboard Overview"}
            {activeTab === "logo" && "Manage Branding & Settings"}
            {activeTab === "projects" && "Portfolio Manager"}
            {activeTab === "categories" && "Product Categories Manager"}
            {activeTab === "journey" && "Journey Scrollytelling Manager"}
            {activeTab === "inquiries" && "B2B Specifications Log"}
            {activeTab === "clients" && "Partner Relations"}
            {activeTab === "slider" && "Slideshow Manager"}
          </h1>
          <span className="text-xs text-stone-500 font-light font-mono">
            Secure Session
          </span>
        </header>

        {/* 1. DASHBOARD OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border border-stone-200 p-6">
                <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Total Active Projects</span>
                <span className="font-serif text-3xl font-semibold text-primary">{projects.length}</span>
              </div>
              <div className="bg-white border border-stone-200 p-6">
                <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Unread B2B Inquiries</span>
                <span className="font-serif text-3xl font-semibold text-accent">{inquiries.filter((i) => !i.read).length}</span>
              </div>
              <div className="bg-white border border-stone-200 p-6">
                <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest block mb-1">B2B Partners Registered</span>
                <span className="font-serif text-3xl font-semibold text-primary">{clients.length}</span>
              </div>
              <div className="bg-white border border-stone-200 p-6">
                <span className="text-stone-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Product Categories</span>
                <span className="font-serif text-3xl font-semibold text-primary">{categories.length}</span>
              </div>
            </div>

            <div className="bg-white border border-stone-200 p-8">
              <h3 className="font-serif text-lg text-primary mb-4">Latest Inquiry Notifications</h3>
              {inquiries.length === 0 ? (
                <p className="text-stone-400 font-light text-sm">No quote requests received yet.</p>
              ) : (
                <div className="space-y-4">
                  {inquiries.slice(0, 3).map((inq) => (
                    <div key={inq.id} className="border-b border-stone-100 pb-4 flex justify-between items-start last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-serif font-medium text-stone-900 text-sm">{inq.company}</h4>
                        <p className="text-stone-500 font-light text-xs mt-1">Requested by {inq.name} ({inq.email})</p>
                      </div>
                      <span className="font-mono text-[10px] text-stone-400">{inq.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. LOGO & SETTINGS BRANDING */}
        {activeTab === "logo" && (
          <div className="bg-white border border-stone-200 p-8 max-w-xl space-y-8">
            <div>
              <h3 className="font-serif text-lg text-primary mb-2">Change Site Branding Logo</h3>
              <p className="text-stone-500 font-light text-xs">
                Upload a custom image logo (such as a transparent PNG) to represent the KhashabSA brand across the header and footer navigation tags.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">
                Upload Logo Image
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, (url) => updateLogo(url))}
                  disabled={isUploading}
                  className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
                />
                {logo.startsWith("data:") || logo.startsWith("http") ? (
                  <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center overflow-hidden">
                    <img src={logo} alt="Site Logo" className="w-full h-full object-contain p-1" />
                  </div>
                ) : (
                  <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-50 flex items-center justify-center overflow-hidden">
                    <span className="font-serif text-[10px] font-bold tracking-widest">{logo}</span>
                  </div>
                )}
              </div>
              {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading logo...</span>}
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h3 className="font-serif text-lg text-primary mb-2">Healthcare Specialty Parallax Image</h3>
              <p className="text-stone-500 font-light text-xs mb-4">
                Upload a custom high-resolution banner image for the home page Healthcare specialty block parallax background.
              </p>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, (url) => updateHealthcareBg(url))}
                  disabled={isUploading}
                  className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
                />
                {healthcareBg && (
                  <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center overflow-hidden">
                    <img src={healthcareBg} alt="Healthcare Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading background...</span>}
            </div>
          </div>
        )}

        {/* 3. MANAGE PROJECTS */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-5 bg-white border border-stone-200 p-8">
              <h3 className="font-serif text-lg text-primary mb-6">
                {isEditingProj ? "Edit Showcase Project" : "Add New Showcase Project"}
              </h3>
              
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Project Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SABIC Headquarters"
                    value={projForm.title}
                    onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Category *</label>
                    <select
                      value={projForm.category}
                      onChange={(e) => setProjForm({ ...projForm, category: e.target.value as any })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="healthcare">Healthcare</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jeddah, KSA"
                      value={projForm.location}
                      onChange={(e) => setProjForm({ ...projForm, location: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Description *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide a detailed account of material choices, engineering precision, and specs..."
                    value={projForm.description}
                    onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 resize-y"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Project Cover Image</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, (url) => setProjForm({ ...projForm, image: url }))}
                      disabled={isUploading}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
                    />
                    {projForm.image && (
                      <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center overflow-hidden">
                        <img src={projForm.image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading image...</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">
                    Specifications (Comma separated tags)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Fire-Rated 90min, Solid Walnut, CNC Carved"
                    value={projForm.specsString}
                    onChange={(e) => setProjForm({ ...projForm, specsString: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                  />
                </div>

                <div className="flex gap-4 pt-2">
                  <button type="submit" className="btn-primary py-3 text-xs w-full">
                    {isEditingProj ? "Apply Changes" : "Create Project"}
                  </button>
                  {isEditingProj && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingProj(false);
                        setEditingProjId("");
                        setProjForm({
                          title: "",
                          category: "residential",
                          location: "",
                          description: "",
                          image: "/images/residential.jpg",
                          specsString: "",
                        });
                      }}
                      className="btn-secondary py-3 text-xs w-full"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* List Column */}
            <div className="lg:col-span-7 bg-white border border-stone-200 p-8 space-y-6">
              <h3 className="font-serif text-lg text-primary">Active Portfolio Registry</h3>
              
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.id} className="border border-stone-200 p-4 flex gap-4 bg-stone-50/50 justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 relative border border-stone-200 bg-stone-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-serif font-medium text-stone-900 text-sm text-left">{p.title}</h4>
                        <div className="flex gap-2 mt-1">
                          <span className="bg-stone-200 text-[8px] font-bold uppercase tracking-wider text-stone-600 px-1.5 py-0.5">
                            {p.category}
                          </span>
                          <span className="text-[10px] font-light text-stone-400 font-sans">
                            {p.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditProject(p)}
                        className="px-2 py-1 text-[10px] border border-stone-300 hover:border-stone-900 transition-colors cursor-pointer bg-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProject(p.id)}
                        className="px-2 py-1 text-[10px] border border-red-200 text-red-650 hover:bg-red-50 transition-colors cursor-pointer bg-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. MANAGE PRODUCT CATEGORIES */}
        {activeTab === "categories" && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white border border-stone-200 p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-full h-32 relative border border-stone-200 bg-stone-100 flex items-center justify-center overflow-hidden mb-4">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-serif font-medium text-stone-900 text-base mb-1 text-left">{cat.title}</h4>
                    <p className="text-stone-550 font-light text-xs leading-relaxed line-clamp-2 text-left">{cat.description}</p>
                  </div>
                  <button
                    onClick={() => startEditCat(cat)}
                    className="mt-6 btn-secondary py-2 text-[10px] w-full cursor-pointer"
                  >
                    Edit Category Cover
                  </button>
                </div>
              ))}
            </div>

            {editingCatId !== null && (
              <div className="bg-white border border-stone-200 p-8 max-w-2xl animate-slide-up">
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-stone-100">
                  <h3 className="font-serif text-lg text-primary">Modify Category: <span className="font-sans font-bold text-accent uppercase tracking-wider text-sm">{editingCatId}</span></h3>
                  <button
                    onClick={() => setEditingCatId(null)}
                    className="text-stone-400 hover:text-stone-900 text-xl cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleCatSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Display Title</label>
                    <input
                      type="text"
                      required
                      value={catForm.title}
                      onChange={(e) => setCatForm({ ...catForm, title: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Grid Description</label>
                    <textarea
                      required
                      rows={3}
                      value={catForm.description}
                      onChange={(e) => setCatForm({ ...catForm, description: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 resize-y"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Upload Display Image</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, (url) => setCatForm({ ...catForm, image: url }))}
                        disabled={isUploading}
                        className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
                      />
                      {catForm.image && (
                        <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center overflow-hidden">
                          <img src={catForm.image} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                    {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading image...</span>}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button type="submit" className="btn-primary py-3 text-xs w-full">
                      Save Product Details
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingCatId(null)}
                      className="btn-secondary py-3 text-xs w-full"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 5. MANAGE JOURNEY STEPS */}
        {activeTab === "journey" && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((step) => (
                <div key={step.id} className="bg-white border border-stone-200 p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-full h-32 relative border border-stone-200 bg-stone-100 flex items-center justify-center overflow-hidden mb-4">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2 text-left">{step.accent}</span>
                    <h4 className="font-serif font-medium text-stone-900 text-base mb-1 text-left">{step.title}</h4>
                    <p className="text-stone-550 font-light text-xs leading-relaxed line-clamp-2 text-left">{step.subtitle}</p>
                  </div>
                  <button
                    onClick={() => startEditJourney(step)}
                    className="mt-6 btn-secondary py-2 text-[10px] w-full cursor-pointer"
                  >
                    Edit Step Media
                  </button>
                </div>
              ))}
            </div>

            {editingJourneyId !== null && (
              <div className="bg-white border border-stone-200 p-8 max-w-2xl animate-slide-up">
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-stone-100">
                  <h3 className="font-serif text-lg text-primary">Configure Journey Step: {editingJourneyId}</h3>
                  <button
                    onClick={() => setEditingJourneyId(null)}
                    className="text-stone-400 hover:text-stone-900 text-xl cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleJourneySubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Display Title</label>
                      <input
                        type="text"
                        required
                        value={journeyForm.title}
                        onChange={(e) => setJourneyForm({ ...journeyForm, title: e.target.value })}
                        className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Accent Label</label>
                      <input
                        type="text"
                        required
                        value={journeyForm.accent}
                        onChange={(e) => setJourneyForm({ ...journeyForm, accent: e.target.value })}
                        className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Subtitle Header</label>
                    <input
                      type="text"
                      required
                      value={journeyForm.subtitle}
                      onChange={(e) => setJourneyForm({ ...journeyForm, subtitle: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Step Narrative Description</label>
                    <textarea
                      required
                      rows={4}
                      value={journeyForm.description}
                      onChange={(e) => setJourneyForm({ ...journeyForm, description: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 resize-y"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Upload Display Image</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, (url) => setJourneyForm({ ...journeyForm, image: url }))}
                        disabled={isUploading}
                        className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
                      />
                      {journeyForm.image && (
                        <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center overflow-hidden">
                          <img src={journeyForm.image} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                    {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading image...</span>}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button type="submit" className="btn-primary py-3 text-xs w-full">
                      Apply Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingJourneyId(null)}
                      className="btn-secondary py-3 text-xs w-full"
                    >
                      Close Form
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 6. B2B SPECIFICATIONS LOG */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            {inquiries.length === 0 ? (
              <div className="bg-white border border-stone-200 p-12 text-center">
                <span className="text-4xl block mb-4">📨</span>
                <p className="text-stone-400 font-light text-sm">No quote requests submitted yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto border border-stone-100">
                <table className="min-w-full divide-y divide-stone-200 text-left text-xs font-light">
                  <thead className="bg-stone-50 text-stone-700 font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Client Name</th>
                      <th className="px-6 py-4">Company</th>
                      <th className="px-6 py-4">Specs Request</th>
                      <th className="px-6 py-4">Volume</th>
                      <th className="px-6 py-4">Received Date</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-650 bg-white">
                    {inquiries.map((inq) => (
                      <tr
                        key={inq.id}
                        className={`transition-colors duration-150 ${
                          inq.read ? "bg-white text-stone-500" : "bg-stone-50/70 font-medium text-stone-900"
                        }`}
                      >
                        <td className="px-6 py-4">
                          <span className="block font-medium">{inq.name}</span>
                          <span className="text-[10px] text-stone-400 font-light">{inq.email} | {inq.phone}</span>
                        </td>
                        <td className="px-6 py-4 font-serif text-sm">{inq.company}</td>
                        <td className="px-6 py-4">
                          <span className="bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-none font-semibold text-[9px] uppercase tracking-wider text-stone-600 block w-max">
                            {inq.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 uppercase font-mono">{inq.volume}</td>
                        <td className="px-6 py-4 font-mono text-[10px] text-stone-400">{inq.date}</td>
                        <td className="px-6 py-4 flex space-x-2">
                          <button
                            onClick={() => {
                              alert(`Project Specifications:\n\n${inq.details || "No details provided"}`);
                              markInquiryRead(inq.id);
                            }}
                            className="px-2 py-1 border border-stone-200 hover:border-stone-900 hover:text-stone-900 transition-colors cursor-pointer bg-white"
                          >
                            View details
                          </button>
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            className="px-2 py-1 border border-red-200 text-red-650 hover:bg-red-50 transition-colors cursor-pointer bg-white"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* 7. MANAGE CLIENT PARTNERS */}
        {activeTab === "clients" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-5 bg-white border border-stone-200 p-8">
              <h3 className="font-serif text-lg text-primary mb-6">Add New B2B Client Partner</h3>
              
              <form onSubmit={handleClientSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">
                    Partner / Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ROSHN or Saudi Oger"
                    value={clientForm.name}
                    onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">
                    Role / Description *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Giga-Project Partner"
                    value={clientForm.role}
                    onChange={(e) => setClientForm({ ...clientForm, role: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">
                    Partner Logo Image (Optional)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, (url) => setClientForm({ ...clientForm, logo: url }))}
                      disabled={isUploading}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
                    />
                    {clientForm.logo && (
                      <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center overflow-hidden">
                        <img src={clientForm.logo} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading logo...</span>}
                </div>

                <button type="submit" className="btn-primary py-3 text-xs w-full">
                  Add Partner Logo Label
                </button>
              </form>
            </div>

            {/* List Column */}
            <div className="lg:col-span-7 bg-white border border-stone-200 p-8 space-y-4">
              <h3 className="font-serif text-lg text-primary mb-6">Partner Registry ({clients.length})</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clients.map((c) => (
                  <div key={c.id} className="border border-stone-200 p-4 flex justify-between items-center gap-4 bg-stone-50">
                    <div className="flex items-center gap-4">
                      {c.logo ? (
                        <div className="w-12 h-12 relative border border-stone-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
                          <img src={c.logo} alt={c.name} className="w-full h-full object-contain p-1" />
                        </div>
                      ) : null}
                      <div>
                        <span className="font-serif text-sm font-semibold uppercase tracking-wider text-stone-800 block text-left">
                          {c.name}
                        </span>
                        <span className="text-[10px] text-stone-400 font-light uppercase tracking-widest mt-0.5 block text-left font-sans">
                          {c.role}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteClient(c.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors text-lg px-2 cursor-pointer shrink-0"
                      title="Delete partner"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 8. HERO SLIDER MANAGER */}
        {activeTab === "slider" && (
          <div className="space-y-8">
            {/* List and Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slides.map((s, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2">Slide {idx + 1}</span>
                    <h4 className="font-serif font-medium text-stone-900 text-base mb-1">{s.title.split(",")[0]}</h4>
                    <p className="text-stone-500 font-light text-xs leading-relaxed truncate text-left">{s.subtitle}</p>
                  </div>
                  <button
                    onClick={() => startEditSlide(idx, s)}
                    className="mt-6 btn-secondary py-2 text-[10px] w-full cursor-pointer"
                  >
                    Edit Slide Configuration
                  </button>
                </div>
              ))}
            </div>

            {/* Editing Form */}
            {editingSlideIdx !== null && (
              <div className="bg-white border border-stone-200 p-8 max-w-2xl">
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-stone-100">
                  <h3 className="font-serif text-lg text-primary">Configure Hero Slide {editingSlideIdx + 1}</h3>
                  <button
                    onClick={() => setEditingSlideIdx(null)}
                    className="text-stone-400 hover:text-stone-900 text-xl cursor-pointer"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleSlideSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Category Prefix</label>
                      <input
                        type="text"
                        required
                        value={slideForm.category}
                        onChange={(e) => setSlideForm({ ...slideForm, category: e.target.value })}
                        className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Background Image</label>
                      <div className="flex items-center gap-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, (url) => setSlideForm({ ...slideForm, image: url }))}
                          disabled={isUploading}
                          className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
                        />
                        {slideForm.image && (
                          <div className="w-16 h-12 relative border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center overflow-hidden">
                            <img src={slideForm.image} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                      {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading image...</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Slide Title (comma denotes newline subtitle)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Quality that lasts, Elegance that impresses."
                      value={slideForm.title}
                      onChange={(e) => setSlideForm({ ...slideForm, title: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Slide Paragraph Subtitle</label>
                    <textarea
                      required
                      rows={3}
                      value={slideForm.subtitle}
                      onChange={(e) => setSlideForm({ ...slideForm, subtitle: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 resize-y"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Button Link Text</label>
                      <input
                        type="text"
                        required
                        value={slideForm.linkText}
                        onChange={(e) => setSlideForm({ ...slideForm, linkText: e.target.value })}
                        className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Button Target Path</label>
                      <input
                        type="text"
                        required
                        placeholder="/services#doors"
                        value={slideForm.linkHref}
                        onChange={(e) => setSlideForm({ ...slideForm, linkHref: e.target.value })}
                        className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button type="submit" className="btn-primary py-3 text-xs w-full">
                      Apply Slideshow Settings
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingSlideIdx(null)}
                      className="btn-secondary py-3 text-xs w-full"
                    >
                      Close Form
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
