import React from "react";
import { col_1, col_2, col_3 } from "../data/credits";
import "./StaffCredits.css";

function SectionCard({ name, members = [] }) {
  return (
    <section className="sc-card">
      <h2 className="sc-sec-name">{name}</h2>
      <ul className="sc-list">
        {members.map((m, i) => (
          <li key={`${m.staff_name}-${i}`} className="sc-row">
            <span className="sc-name">{m.staff_name}</span>
            {m.title ? <span className="sc-role">, {m.title}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function StaffCredits({ title = "STAFF" }) {
  const columns = [col_1, col_2, col_3];

  return (
    <main className="sc-page">
      <div className="sc-container">
        <h1 className="sc-title">{title}</h1>
        <div className="sc-grid sc-grid--3-or-1">
          {columns.map((colObj, idx) => (
            <div key={idx} className="sc-col">
              {Object.entries(colObj).map(([sectionName, members]) => (
                <SectionCard key={sectionName} name={sectionName} members={members} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}