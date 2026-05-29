import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import EstateMap from "./components/EstateMap";
import { motion } from "framer-motion";

export default function App() {
  const [expanded, setExpanded] = useState(true);
  const [activePage, setActivePage] = useState("overview");

  const pageConfig = {
    overview: {
      title: "OVERVIEW",
      sidebar: [
        "Estate Summary",
        "Live Status",
        "Alerts",
        "Daily Activity",
        "Heatmap",
      ],
      cards: [
        { title: "Harvest Progress", value: "72%" },
        { title: "Total Production (MT)", value: "124.8" },
      ],
    },

    operations: {
      title: "OPERATIONS",
      sidebar: [
        "Production",
        "Harvest",
        "Upkeep",
        "Weighbridge",
        "Logistic",
        "Expenditure",
      ],
      cards: [
        { title: "Total Production", value: "124.8 MT", span: "col-span-2" },
        { title: "Avg Production", value: "18.4 MT", span: "col-span-2" },
        { title: "FFB", value: "112.3 MT", span: "col-span-1" },
        { title: "Loose Fruit", value: "8.4 MT", span: "col-span-1" },
        { title: "Empty Bunch", value: "312", span: "col-span-1" },
        { title: "Empty Fert Bag", value: "45", span: "col-span-1" },
      ],
    },

    agronomy: {
      title: "AGRONOMY",
      sidebar: [
        "Plant Health",
        "Fertiliser",
        "Pest & Disease",
        "Soil Health",
        "Scouting",
        "Yield Forecast",
      ],
      cards: [
        { title: "Plant Health Score", value: "N/A" },
        { title: "Nutrient Status", value: "N/A" },
        { title: "Pest Incidents", value: "N/A" },
        { title: "Disease Incidents", value: "N/A" },
        { title: "Scouting Coverage", value: "N/A" },
      ],
    },

    workspace: {
      title: "WORKSPACE",
      sidebar: [
        "My Tasks",
        "Team Tasks",
        "Approvals",
        "Documents",
        "Calendar",
        "Notifications",
      ],
      cards: [
        { title: "Open Tasks", value: "N/A" },
        { title: "Overdue Tasks", value: "N/A" },
        { title: "Pending Approvals", value: "N/A" },
        { title: "Documents", value: "N/A" },
        { title: "Notifications", value: "N/A" },
      ],
    },

    reports: {
      title: "REPORTS",
      sidebar: ["Coming Soon"],
      cards: [
        { title: "Monthly Reports", value: "N/A" },
        { title: "Scheduled Reports", value: "N/A" },
        { title: "Exports", value: "N/A" },
        { title: "Generated Today", value: "N/A" },
        { title: "Pending Jobs", value: "N/A" },
      ],
    },

    settings: {
      title: "SETTINGS",
      sidebar: ["Coming Soon"],
      cards: [
        { title: "Users", value: "N/A" },
        { title: "Roles", value: "N/A" },
        { title: "Estates", value: "N/A" },
        { title: "Integrations", value: "N/A" },
        { title: "System Health", value: "N/A" },
      ],
    },
  };

  const currentPage = pageConfig[activePage];

  return (
    <div className="min-h-screen bg-[#020B14] text-white overflow-hidden">
      {/* TOP NAVBAR */}
      <header className="h-14 border-b border-white/10 bg-[#01070F] flex items-center px-4 md:px-6 justify-between">
        <div className="flex items-center gap-4 md:gap-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-white flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-green-500 rounded-sm"></div>
            </div>

            <div className="font-semibold text-sm md:text-lg whitespace-nowrap">
              Estate A / Block 23
            </div>
          </div>

            <nav className="hidden lg:flex gap-8 text-sm text-white/70">
                <button
                    onClick={() => setActivePage("overview")}
                    className={`relative pb-2 transition-colors ${
                    activePage === "overview"
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                >
                    Overview

                    {activePage === "overview" && (
                    <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-500"
                        transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        }}
                    />
                    )}
                </button>

                <button
                    onClick={() => setActivePage("operations")}
                    className={`relative pb-2 transition-colors ${
                    activePage === "operations"
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                >
                    Operations

                    {activePage === "operations" && (
                    <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-500"
                        transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        }}
                    />
                    )}
                </button>

                <button
                    onClick={() => setActivePage("agronomy")}
                    className={`relative pb-2 transition-colors ${
                    activePage === "operations"
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                >
                    Agronomy

                    {activePage === "agronomy" && (
                    <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-500"
                        transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        }}
                    />
                    )}
                </button>

                <button
                    onClick={() => setActivePage("workspace")}
                    className={`relative pb-2 transition-colors ${
                    activePage === "operations"
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                >
                    Workspace

                    {activePage === "workspace" && (
                    <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-500"
                        transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        }}
                    />
                    )}
                </button>

                <button
                    onClick={() => setActivePage("reports")}
                    className={`relative pb-2 transition-colors ${
                    activePage === "operations"
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                >
                    Reports

                    {activePage === "reports" && (
                    <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-500"
                        transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        }}
                    />
                    )}

                </button>

                <button
                    onClick={() => setActivePage("settings")}
                    className={`relative pb-2 transition-colors ${
                    activePage === "operations"
                        ? "text-white"
                        : "hover:text-white"
                    }`}
                >

                    
                    Settings

                    {activePage === "settings" && (
                    <motion.div
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-500"
                        transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        }}
                    />
                    )}
                </button>
                </nav>
        </div>


        <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/20"></div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-56px)] gap-3 p-3">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-[220px] bg-[#04111D] rounded-2xl border border-white/5 p-4 flex flex-col">
          <div className="text-white/40 text-xs tracking-wider mb-5">
             {currentPage.title}
            </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {currentPage.sidebar.map((item, idx) => (
              <button
                key={item}
                className={
                  idx === 0
                    ? "w-full text-left px-4 py-3 rounded-xl bg-green-500/15 border border-green-500/20 text-white"
                    : "w-full text-left px-4 py-3 rounded-xl text-white/70 hover:bg-white/5"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-4 lg:mt-auto rounded-xl bg-[#071827] border border-white/5 p-4">
            <div className="text-xs text-white/40 mb-2">
              SYSTEM STATUS
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span className="text-white/60">Connected</span>
              <span className="text-green-400">ONLINE</span>
            </div>

            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="w-[82%] h-full bg-green-500 rounded-full"></div>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1 flex flex-col gap-4 h-full">
          {/* MAP SECTION */}
          <section
            className={
              expanded
                ? "relative flex-1 rounded-2xl overflow-hidden border border-white/5"
                : "relative h-[220px] rounded-2xl overflow-hidden border border-white/5"
            }
          >
            <EstateMap />

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[9999]">
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-12 h-8 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center cursor-pointer hover:bg-black/90 transition-all"
              >
                {expanded ? (
                  <ChevronUp className="w-5 h-5 text-white/60" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/60" />
                )}
              </button>
            </div>
          </section>

          {/* KPI SECTION */}
          {activePage === "overview" ? (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-shrink-0">
              {currentPage.cards.map((card) => (
                <div
                  key={card.title}
                  className="h-[160px] rounded-2xl bg-[#04111D] border border-white/5 p-5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl"></div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="text-sm text-white/50 mb-2">
                        {card.title}
                      </div>

                      <div className="text-4xl md:text-5xl font-bold tracking-tight">
                        {card.value}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-white/40">
                      <span>Updated 2 min ago</span>
                      <span className="text-green-400">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section className="grid grid-cols-8 gap-3 flex-shrink-0">
              {currentPage.cards.map((card) => (
                <div
                  key={card.title}
                  className={`${card.span} h-[160px] rounded-2xl bg-[#04111D] border border-white/5 p-4 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-3xl"></div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="text-xs text-white/50 mb-2">
                        {card.title}
                      </div>

                      <div className="text-2xl md:text-3xl font-bold">
                        {card.value}
                      </div>
                    </div>

                    <div className="text-xs text-green-400">
                      LIVE
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}