"use client";

import { useState } from "react";
import { useDb, Inquiry, HeroSlide, ClientPartner } from "@/context/DbContext";
import { Project } from "@/data/projects";
import { uploadImageAction } from "@/app/actions/upload";

type AdminTab = "dashboard" | "logo" | "projects" | "inquiries" | "clients" | "slider";

export default function AdminPage() {
  const {
    logo,
    projects,
    inquiries,
    clients,
    slides,
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

  // Logo Edit State
  const [logoInput, setLogoInput] = useState("");
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
  const [clientForm, setClientForm] = useState({ name: "", role: "" });
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

  // Logo Submit Handler
  const handleLogoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (logoInput.trim()) {
      updateLogo(logoInput.trim());
      setLogoInput("");
      alert("Logo text updated successfully!");
    }
  };

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
      setClientForm({ name: "", role: "" });
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

        <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible p-4 gap-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: "📊" },
            { id: "logo", label: "Branding / Logo", icon: "🏷️" },
            { id: "projects", label: "Manage Projects", icon: "📁" },
            { id: "inquiries", label: `B2B Inquiries (${inquiries.filter(i => !i.read).length})`, icon: "📨" },
            { id: "clients", label: "Clients & Partners", icon: "🤝" },
            { id: "slider", label: "Hero Image Slider", icon: "🎞️" },
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
            {activeTab === "logo" && "Manage Branding Logo"}
            {activeTab === "projects" && "Portfolio Manager"}
            {activeTab === "inquiries" && "B2B Specifications Log"}
            {activeTab === "clients" && "Partner Relations"}
            {activeTab === "slider" && "Slideshow Manager"}
          </h1>
          <span className="text-xs text-stone-500 font-light font-mono">
            DB Status: Connected
          </span>
        </header>

        {/* 1. DASHBOARD OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Projects", count: projects.length, icon: "📁", color: "border-l-accent" },
                { title: "Unread Inquiries", count: inquiries.filter(i => !i.read).length, icon: "📨", color: "border-l-stone-600" },
                { title: "Total Partners", count: clients.length, icon: "🤝", color: "border-l-accent" },
                { title: "Active Slides", count: slides.length, icon: "🎞️", color: "border-l-stone-400" },
              ].map((stat, i) => (
                <div key={i} className={`bg-white border border-stone-200 border-l-4 p-6 ${stat.color}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{stat.title}</span>
                    <span className="text-lg">{stat.icon}</span>
                  </div>
                  <span className="text-3xl font-serif font-medium text-stone-900 block">{stat.count}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions / Info */}
            <div className="bg-white border border-stone-200 p-8">
              <h3 className="font-serif text-lg text-primary mb-4">Welcome to KhashabSA Administration</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                Use the left-hand panel tabs to configure the live content. Updates made here are compiled dynamically into your browser's persistent memory and will instantly display across the public site layout.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setActiveTab("inquiries")} className="btn-primary py-3 text-xs">
                  Review Inquiries
                </button>
                <button onClick={() => setActiveTab("projects")} className="btn-secondary py-3 text-xs">
                  Add New Project
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. LOGO BRANDING */}
        {activeTab === "logo" && (
          <div className="bg-white border border-stone-200 p-8 max-w-xl space-y-6">
            <div>
              <h3 className="font-serif text-lg text-primary mb-2">Change Site Branding Logo</h3>
              <p className="text-stone-500 font-light text-xs">
                Enter text logo (e.g. KhashabSA) OR upload an image logo to replace the header and footer brand tags.
              </p>
            </div>

            <form onSubmit={handleLogoSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">
                  Logo Text
                </label>
                <input
                  type="text"
                  required
                  placeholder={logo.startsWith("data:") || logo.startsWith("http") ? "Image logo is active" : logo}
                  value={logoInput}
                  onChange={(e) => setLogoInput(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                />
              </div>
              <button type="submit" className="btn-primary py-3 text-xs tracking-wider w-full">
                Save Logo Text
              </button>
            </form>

            <div className="border-t border-stone-150 pt-6">
              <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">
                Or Upload Logo Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, (url) => updateLogo(url))}
                disabled={isUploading}
                className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 cursor-pointer"
              />
              {isUploading && <span className="text-[10px] text-accent animate-pulse block mt-1">Uploading image...</span>}

              {logo.startsWith("data:") || logo.startsWith("http") ? (
                <div className="mt-4 border border-stone-200 p-4 bg-stone-50">
                  <span className="text-[9px] text-stone-400 block mb-2 font-semibold">Active Logo Preview:</span>
                  <img src={logo} alt="Site Logo" className="h-10 object-contain" />
                </div>
              ) : (
                <div className="mt-4 border border-stone-200 p-4 bg-stone-50">
                  <span className="text-[9px] text-stone-400 block mb-1 font-semibold">Active Text Logo:</span>
                  <span className="font-serif text-lg text-primary tracking-widest uppercase font-semibold">{logo}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. MANAGE PROJECTS */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column */}
            <div className="lg:col-span-5 bg-white border border-stone-200 p-8">
              <h3 className="font-serif text-lg text-primary mb-6">
                {isEditingProj ? "Edit Selected Project" : "Add New Project"}
              </h3>
              
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Project Title</label>
                  <input
                    type="text"
                    required
                    value={projForm.title}
                    onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Category</label>
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
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Location</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Riyadh, Saudi Arabia"
                      value={projForm.location}
                      onChange={(e) => setProjForm({ ...projForm, location: e.target.value })}
                      className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Project Image</label>
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
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Technical Specs (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Fire rated, Maple Veneer, Soundproof"
                    value={projForm.specsString}
                    onChange={(e) => setProjForm({ ...projForm, specsString: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Description</label>
                  <textarea
                    rows={4}
                    required
                    value={projForm.description}
                    onChange={(e) => setProjForm({ ...projForm, description: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-200 text-sm focus:outline-none focus:border-accent bg-white text-stone-900 resize-y"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-2">
                  <button type="submit" className="btn-primary py-3 text-xs w-full">
                    {isEditingProj ? "Save Edits" : "Create Project"}
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
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* List Column */}
            <div className="lg:col-span-7 bg-white border border-stone-200 p-8 space-y-4">
              <h3 className="font-serif text-lg text-primary mb-6">Existing Projects ({projects.length})</h3>
              
              <div className="divide-y divide-stone-100 overflow-y-auto max-h-[600px] pr-2">
                {projects.map((p) => (
                  <div key={p.id} className="py-4 first:pt-0 last:pb-0 flex justify-between items-center gap-4">
                    <div>
                      <h4 className="font-serif font-medium text-stone-950 text-base">{p.title}</h4>
                      <div className="flex gap-3 text-xs font-light text-stone-500 mt-1 uppercase tracking-wider">
                        <span className="text-accent font-semibold">{p.category}</span>
                        <span>&bull;</span>
                        <span>{p.location}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 shrink-0">
                      <button
                        onClick={() => startEditProject(p)}
                        className="px-3 py-1.5 border border-stone-200 text-xs text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this project?")) {
                            deleteProject(p.id);
                          }
                        }}
                        className="px-3 py-1.5 border border-red-200 text-xs text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
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

        {/* 4. MANAGE INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="bg-white border border-stone-200 p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-lg text-primary">Submitted B2B Client Inquiries</h3>
              <span className="text-xs text-accent uppercase font-bold tracking-widest">
                {inquiries.filter(i => !i.read).length} Unread Messages
              </span>
            </div>

            {inquiries.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-stone-200">
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
                            className="px-2 py-1 border border-stone-200 hover:border-stone-900 hover:text-stone-900 transition-colors cursor-pointer"
                          >
                            View details
                          </button>
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            className="px-2 py-1 border border-red-200 text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
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

        {/* 5. MANAGE CLIENT PARTNERS */}
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
                    <div>
                      <span className="font-serif text-sm font-semibold uppercase tracking-wider text-stone-800 block">
                        {c.name}
                      </span>
                      <span className="text-[10px] text-stone-400 font-light uppercase tracking-widest mt-0.5 block">
                        {c.role}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteClient(c.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors text-lg px-2 cursor-pointer"
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

        {/* 6. HERO SLIDER MANAGER */}
        {activeTab === "slider" && (
          <div className="space-y-8">
            {/* List and Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slides.map((s, idx) => (
                <div key={idx} className="bg-white border border-stone-200 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2">Slide {idx + 1}</span>
                    <h4 className="font-serif font-medium text-stone-900 text-base mb-1">{s.title.split(",")[0]}</h4>
                    <p className="text-stone-500 font-light text-xs leading-relaxed truncate">{s.subtitle}</p>
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
                    <label className="block text-xs font-semibold uppercase text-stone-600 tracking-wider mb-2">Slide Description Subtitle</label>
                    <textarea
                      rows={3}
                      required
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
