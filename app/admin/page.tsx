"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

interface Evaluation {
  _id: string;
  degree: string;
  englishLevel: string;
  startDate: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export default function AdminPage() {
  const [data, setData] = useState<Evaluation[]>([]);
  const [filteredData, setFilteredData] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/evaluations")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.data || []);
        setFilteredData(resData.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const res = await fetch("/api/evaluations", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await res.json();
      if (res.ok) {
        const updated = data.filter((item) => item._id !== id);
        setData(updated);
        setFilteredData(updated);
      } else {
        alert(result.message || "Failed to delete");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const exportCSV = () => {
    if (!filteredData.length) return;
    const headers = ["Name", "Email", "Degree", "English Level", "Start Date", "Phone", "Created At"];
    const rows = filteredData.map((item) => [
      item.name, item.email, item.degree, item.englishLevel,
      item.startDate, item.phone, new Date(item.createdAt).toLocaleString(),
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((row) => row.map((field) => `"${field}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "evaluations.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportExcel = () => {
    if (!filteredData.length) return;
    const worksheetData = filteredData.map((item) => ({
      Name: item.name, Email: item.email, Degree: item.degree,
      English: item.englishLevel, Start_Date: item.startDate,
      Phone: item.phone, Created_At: new Date(item.createdAt).toLocaleString(),
    }));
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Evaluations");
    XLSX.writeFile(workbook, "evaluations.xlsx");
  };

  if (loading) {
    return (
      <>
        <style>{styles}</style>
        <div className="loader-screen">
          <div className="loader-spinner" />
          <p className="loader-text">Loading evaluations…</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="admin-root">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <span className="logo-text">Admin</span>
          </div>
          <nav className="sidebar-nav">
            <a className="nav-item active" href="#">
              <span className="nav-icon">▦</span> Dashboard
            </a>
          </nav>
        </aside>

        {/* Main */}
        <main className="main-content">
          {/* Top Bar */}
          <header className="topbar">
            <div className="topbar-left">
              <h1 className="page-title">Dashboard</h1>
              <span className="page-subtitle">
                {filteredData.length} of {data.length} entries
              </span>
            </div>
            <div className="topbar-right">
              <div className="search-wrap">
                <span className="search-icon">⌕</span>
                <input
                  type="text"
                  placeholder="Search by name…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="search-input"
                />
              </div>
              <button onClick={exportCSV} className="btn btn-csv">↓ CSV</button>
              <button onClick={exportExcel} className="btn btn-excel">↓ Excel</button>
            </div>
          </header>

          {/* Stats Cards */}
          <div className="stats-row">
            <div className="stat-card stat-blue">
              <p className="stat-label">Total Entries</p>
              <p className="stat-value">{data.length}</p>
            </div>
            <div className="stat-card stat-green">
              <p className="stat-label">Filtered Results</p>
              <p className="stat-value">{filteredData.length}</p>
            </div>
            <div className="stat-card stat-purple">
              <p className="stat-label">Today</p>
              <p className="stat-value">
                {data.filter((d) => new Date(d.createdAt).toDateString() === new Date().toDateString()).length}
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="table-card">
            <table className="eval-table">
              <colgroup>
                <col className="col-num" />
                <col className="col-name" />
                <col className="col-email" />
                <col className="col-degree" />
                <col className="col-english" />
                <col className="col-start" />
                <col className="col-phone" />
                <col className="col-created" />
                <col className="col-action" />
              </colgroup>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Degree</th>
                  <th>English</th>
                  <th>Start</th>
                  <th>Phone</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr key={item._id} className="table-row">
                    <td className="td-index">{idx + 1}</td>
                    <td className="td-name">
                      <div className="name-cell">
                        <div className="name-avatar">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="name-text">{item.name}</span>
                      </div>
                    </td>
                    <td className="td-muted">{item.email}</td>
                    <td><span className="badge badge-blue">{item.degree}</span></td>
                    <td><span className="badge badge-green">{item.englishLevel}</span></td>
                    <td className="td-muted">{item.startDate}</td>
                    <td className="td-muted">{item.phone}</td>
                    <td className="td-muted">{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td className="td-action">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn-delete"
                        title="Delete"
                        aria-label="Delete"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                          <path d="M10 11v6"/><path d="M14 11v6"/>
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={9} className="empty-state">
                      <div className="empty-icon">◌</div>
                      <p>No matching results found.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --accent: #2563eb;
    --accent-hover: #1d4ed8;
    --green: #16a34a;
    --green-hover: #15803d;
    --purple: #7c3aed;
    --red: #ef4444;
    --text-primary: #111827;
    --text-muted: #6b7280;
    --border: #e5e7eb;
    --bg: #f9fafb;
    --card-bg: #ffffff;
    --sidebar-bg: #ffffff;
    --sidebar-w: 150px;
  }

  body { font-family: 'DM Sans', sans-serif; background: var(--bg); }

  /* Loader */
  .loader-screen {
    min-height: 100vh; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    background: var(--bg); gap: 16px;
  }
  .loader-spinner {
    width: 44px; height: 44px;
    border: 3px solid var(--border); border-top-color: var(--accent);
    border-radius: 50%; animation: spin 0.9s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .loader-text { color: var(--text-muted); font-size: 14px; }

  /* Layout */
  .admin-root { display: flex; min-height: 100vh; background: var(--bg); }

  /* Sidebar */
  .sidebar {
    width: var(--sidebar-w);
    background: var(--sidebar-bg);
    border-right: 1px solid var(--border);
    display: flex; flex-direction: column;
    padding: 28px 0;
    position: fixed; top: 0; left: 0; bottom: 0;
    z-index: 10;
    box-shadow: 1px 0 4px rgba(0,0,0,0.04);
  }
  .sidebar-logo {
    padding: 0 20px 22px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 14px;
  }
  .logo-text {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: 22px; color: var(--accent);
  }
  .sidebar-nav { display: flex; flex-direction: column; gap: 4px; padding: 0 10px; }
  .nav-item {
    display: flex; align-items: center; gap: 8px;
    padding: 9px 12px; border-radius: 10px;
    color: var(--text-muted); font-size: 13px; font-weight: 500;
    text-decoration: none; transition: all 0.2s; cursor: pointer;
  }
  .nav-item:hover { background: #f3f4f6; color: var(--text-primary); }
  .nav-item.active { background: var(--accent); color: #fff; }
  .nav-icon { font-size: 15px; }

  /* Main */
  .main-content {
    margin-left: var(--sidebar-w);
    flex: 1; padding: 26px 22px;
    min-height: 100vh; min-width: 0;
  }

  /* Topbar */
  .topbar {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 22px; flex-wrap: wrap; gap: 14px;
  }
  .topbar-left { display: flex; flex-direction: column; gap: 3px; }
  .page-title {
    font-family: 'Syne', sans-serif; font-size: 26px;
    font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;
  }
  .page-subtitle { font-size: 13px; color: var(--text-muted); }
  .topbar-right { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

  /* Search */
  .search-wrap { position: relative; display: flex; align-items: center; }
  .search-icon {
    position: absolute; left: 11px;
    color: var(--text-muted); font-size: 17px; pointer-events: none;
  }
  .search-input {
    background: #fff; border: 1px solid var(--border); border-radius: 10px;
    padding: 8px 12px 8px 34px;
    color: var(--text-primary); font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    width: 190px; outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .search-input::placeholder { color: var(--text-muted); }
  .search-input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
  }

  /* Buttons */
  .btn {
    padding: 8px 14px; border-radius: 9px;
    font-size: 13px; font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer; border: none;
    transition: all 0.2s; color: #fff; white-space: nowrap;
  }
  .btn-csv { background: var(--accent); }
  .btn-csv:hover { background: var(--accent-hover); transform: translateY(-1px); }
  .btn-excel { background: var(--green); }
  .btn-excel:hover { background: var(--green-hover); transform: translateY(-1px); }

  /* Stats Row */
  .stats-row {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 14px; margin-bottom: 22px;
  }
  .stat-card {
    background: var(--card-bg); border: 1px solid var(--border);
    border-radius: 14px; padding: 18px 20px;
    position: relative; overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .stat-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  }
  .stat-blue::before { background: var(--accent); }
  .stat-green::before { background: var(--green); }
  .stat-purple::before { background: var(--purple); }
  .stat-label {
    font-size: 11px; font-weight: 500; color: var(--text-muted);
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;
  }
  .stat-value {
    font-family: 'Syne', sans-serif; font-size: 32px;
    font-weight: 800; color: var(--text-primary); line-height: 1;
  }

  /* Table Card — NO outer scroll; table handles its own layout */
  .table-card {
    background: var(--card-bg); border: 1px solid var(--border);
    border-radius: 16px; overflow: hidden;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05); width: 100%;
  }

  /* Table */
  .eval-table {
    width: 100%; border-collapse: collapse;
    font-size: 13px; table-layout: fixed;
  }

  /* Column widths: percentages so everything fits the available width */
  .col-num     { width: 34px; }
  .col-name    { width: 13%; }
  .col-email   { width: 16%; }
  .col-degree  { width: 14%; }
  .col-english { width: 10%; }
  .col-start   { width: 10%; }
  .col-phone   { width: 11%; }
  .col-created { width: 9%; }
  .col-action  { width: 40px; }

  .eval-table thead tr {
    background: #f9fafb; border-bottom: 1px solid var(--border);
  }
  .eval-table th {
    padding: 11px 8px; text-align: left;
    font-size: 10px; font-weight: 600; color: var(--text-muted);
    text-transform: uppercase; letter-spacing: 0.08em;
    font-family: 'Syne', sans-serif;
    white-space: nowrap; overflow: hidden;
  }
  .table-row { border-bottom: 1px solid var(--border); transition: background 0.15s; }
  .table-row:last-child { border-bottom: none; }
  .table-row:hover { background: #eff6ff; }

  .eval-table td {
    padding: 11px 8px; vertical-align: middle;
    word-break: break-word; overflow-wrap: anywhere;
  }

  .td-index { color: var(--text-muted); font-size: 12px; white-space: nowrap; }
  .td-name { font-weight: 600; color: var(--text-primary); }
  .td-muted { color: var(--text-muted); }
  .td-action { text-align: center; }

  .name-cell { display: flex; align-items: flex-start; gap: 7px; }
  .name-avatar {
    width: 26px; height: 26px; border-radius: 7px; flex-shrink: 0; margin-top: 1px;
    background: linear-gradient(135deg, var(--accent), var(--purple));
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #fff;
    font-family: 'Syne', sans-serif;
  }
  .name-text { word-break: break-word; overflow-wrap: anywhere; line-height: 1.4; }

  /* Badges — allow wrapping inside cell */
  .badge {
    display: inline-block; padding: 3px 7px; border-radius: 5px;
    font-size: 11px; font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    white-space: normal; word-break: break-word; line-height: 1.3;
  }
  .badge-blue { background: #dbeafe; color: #1d4ed8; border: 1px solid #bfdbfe; }
  .badge-green { background: #dcfce7; color: #15803d; border: 1px solid #bbf7d0; }

  /* Delete Icon Button */
  .btn-delete {
    display: inline-flex; align-items: center; justify-content: center;
    background: #fee2e2; color: #dc2626; border: 1px solid #fecaca;
    width: 30px; height: 30px; border-radius: 7px;
    cursor: pointer; transition: all 0.2s; flex-shrink: 0;
  }
  .btn-delete:hover {
    background: var(--red); color: #fff; border-color: var(--red);
    transform: translateY(-1px);
  }

  /* Empty State */
  .empty-state { padding: 60px 0 !important; text-align: center; color: var(--text-muted); }
  .empty-icon { font-size: 40px; margin-bottom: 12px; opacity: 0.4; }
  .empty-state p { font-size: 14px; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .sidebar { display: none; }
    .main-content { margin-left: 0; padding: 16px 14px; }
    .stats-row { grid-template-columns: 1fr 1fr; }
    .search-input { width: 150px; }
    /* Tablet: allow horizontal scroll if screen too narrow */
    .table-card { overflow-x: auto; }
    .eval-table { table-layout: auto; min-width: 640px; }
    .col-num, .col-name, .col-email, .col-degree,
    .col-english, .col-start, .col-phone, .col-created, .col-action { width: auto; }
  }

  @media (max-width: 600px) {
    .stats-row { grid-template-columns: 1fr; }
    .topbar { flex-direction: column; align-items: flex-start; }
    .topbar-right { width: 100%; }
    .search-input { flex: 1; width: auto; min-width: 0; }
    .page-title { font-size: 22px; }

    /* Mobile: stack rows as cards */
    .eval-table thead { display: none; }
    .eval-table, .eval-table tbody, .eval-table tr, .eval-table td { display: block; width: 100%; }
    .table-row { padding: 12px 14px; border-bottom: 1px solid var(--border); position: relative; }
    .eval-table td { padding: 3px 0; border: none; font-size: 13px; }
    .td-index { display: none; }
    .td-action { position: absolute; top: 12px; right: 14px; text-align: right; width: auto; }
    .name-cell { margin-bottom: 4px; }
  }
`;
