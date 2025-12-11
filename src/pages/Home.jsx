// Imports from React + hooks needed(useState, useMemo)
import React, { useState, useMemo } from "react";
import Card from "../Components/Card";
import data from "../Data/data";

function Home() {
  // Stores the extensions and allow me to update, toggle, delete
  // extensions is the variable  and setExtensions is the function to update the extensions 
  const [extensions, setExtensions] = useState(data);

  //Track which filter is currently selected: "all", "active", or "inactive" 
  //  filter is the variable to store which filter is selected(all, active or inactive), setFilter is the function used
  const [filter, setFilter] = useState("all");

  // // Toggles active/inactive for a specific extension and changed the isActive  to true or false
  // loops through the extensions and when it finds the matching ID it toggles to isActvie
  // this function runs after user clicks the toggle button
  const toggleExtension = (id) => {
   // updates the extension, with parameter (previous) references the array before the update takes place.
    setExtensions((prev) =>
    // loops through every extension in the previous array.
      prev.map((ext) =>
    //  If the extension's ID matches the one that was clicked  it will copy the extension's properties
    //  and will change from true to false or false to true, or else extension will show unchanged
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  //  // This Function removes an extension from the list.
  const removeExtension = (id) => {
  // Update the "extensions" state by filtering out the selected extension.
  // prev.filter - filters through and Keep every extension except the one with the matching id
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  // decides  which extensions should be displayed based on the current filter.
  // useMemo makes this only run when extensions or filter changes.
  const displayed = useMemo(() => {
    // If the filter is "active", it will return only extensions with isActive = true
    if (filter === "active") return extensions.filter((e) => e.isActive);
    // If the filter is "inactive", return only extensions with isActive = false
    if (filter === "inactive") return extensions.filter((e) => !e.isActive);
     // If filter is "all", it will return everything
    return extensions;
    //  These recalculate when either changes
  }, [extensions, filter]);

  return (
    // This div is the page container 
    <main className="page">
    <nav>
    {/*  This div is for page title called Extensions List */}
    <div className="h1extension">
     <h1> Extensions List</h1>
     </div>
      {/* div for  fiter buttons */}
      <div className="filter-buttons">
       {/* this button shows the active items on the page */}
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        {/* this button shows inactive items on page */}
        <button
          className={filter === "inactive" ? "active" : ""}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </button>
        {/* this button shows all items on page */}
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Show All
        </button>
      </div>
      </nav>
      {/* Loop through the filtered list and create a Card component for each extension */}  
      {/* key = React Identifier  */}
      {/* extension={ext}   Passes the extension data(data object) to the Card component, and allows the card to receive the data such as Id, name, description isActive-from the data */}
      {/* onToggle handler -onToggle={() => toggleExtension(ext.id)}  uses The toggle Function to toggle active/inactive*/}
      {/* onReemove handler -onRemove={() => removeExtension(ext.id)}  uses the remove Function to remove the extension */}
      <section className="cards">
        {displayed.map((ext) => (
          <Card
            key={ext.id}
            extension={ext}
            onToggle={() => toggleExtension(ext.id)}
            onRemove={() => removeExtension(ext.id)}
          />
        ))}
      </section>
    </main>
  );
}

// Exports the component so other files can import and use it 
export default Home;
