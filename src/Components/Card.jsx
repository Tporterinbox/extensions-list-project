

import Toggle from "./Toggle";

function Card({ extension, onToggle, onRemove }) {
  return (
    <article className="card">
      <div className="card-content">
       
         <img 
          src={extension.logo} 
          alt={extension.name} 
          className="card-logo" 
        />
        

        {/* Name and Description on the right */}
        <div className="card-text">
          <h2>{extension.name}</h2>
          <p>{extension.description}</p>
        </div>
      </div>

      {/* Actions at the bottom */}
      <div className="card-actions">
        <button className="remove-btn" onClick={onRemove}>
          Remove
        </button>
        <Toggle checked={extension.isActive} onChange={onToggle} />
      </div>
    </article>
  );
}

export default Card;
