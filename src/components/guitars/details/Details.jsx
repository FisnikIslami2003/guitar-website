import React, { useState } from 'react';
import './Details.scss';
import { Specification } from './specification';
import { Whoplays } from './whoplays';

export const Details = ({ model }) => {
  const [activeTab, setActiveTab] = useState("spec");

  return (
    <div className='details-main'>
      <div className="details-tabs">
        <button
          className={activeTab === "spec" ? "active-tab" : ""}
          onClick={() => setActiveTab("spec")}
        >
          Specification
        </button>
        <button
          className={activeTab === "plays" ? "active-tab" : ""}
          onClick={() => setActiveTab("plays")}
        >
          Who Plays It
        </button>
      </div>

      {activeTab === "spec" && <Specification specs={model?.specs} />}
      {activeTab === "plays" && <Whoplays musicians={model?.musicians} />}
    </div>
  );
};
