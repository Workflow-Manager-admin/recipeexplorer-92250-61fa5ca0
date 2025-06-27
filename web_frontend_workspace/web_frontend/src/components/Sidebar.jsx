import React from "react";

/**
 * PUBLIC_INTERFACE
 * Sidebar for recipe app: search/filter stub UI, responsive drawer/modal
 */
function Sidebar({ open, onClose }) {
  // By default, filter/search control is just placeholder
  
  return (
    <>
      {/* Overlay for mobile, only shown when sidebar open */}
      <div
        className="sidebar-overlay"
        style={{ display: open ? "block" : "none" }}
        onClick={onClose}
        tabIndex={-1}
        aria-hidden={!open}
      />
      <aside
        className={
          "sidebar " +
          (open ? "sidebar-open" : "sidebar-closed")
        }
        role="complementary"
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        aria-label="Sidebar"
      >
        <button
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Close Sidebar"
        >
          ✕
        </button>
        <div className="sidebar-title">Search & Filters</div>
        <div className="sidebar-filters">
          <input
            type="text"
            placeholder="Search recipes…"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "7px",
              border: "1px solid var(--border-color)",
              fontSize: "1.02em"
            }}
            disabled
          />
          <div style={{ color: "var(--text-secondary)", fontSize: "0.96em" }}>
            {/* Stub: No filter UI implemented */}
            (Coming soon: Filter by Tag, Time, etc.)
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
