import React, { useState } from "react";

function PopupForm({ task = {}, onClose, onSubmit }) {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "500px",
        backgroundColor: "#f9f9f9",
        
      }}>
        <h2 style={{ margin: 0 , textAlign: "center"}}>Edit Task</h2>
        <form onSubmit={handleSubmit}  style={{padding: "30px",marginRight: "30px"}}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" , padding: "18px", border: "1px solid #D1D5DB", borderRadius: "4px",fontSize: "26px" }}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" , padding: "18px", border: "1px solid #D1D5DB", borderRadius: "4px", height: "200px",fontSize: "20px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="button" onClick={onClose} style={{padding: "12px 25px" ,background: "#F44336 ", border: "none",borderRadius: "4px", color: "black", cursor: "pointer" }}>Cancel</button>
            <button type="submit" style={{ padding: "12px 30px", backgroundColor: "#3B82F6", color: "black", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "-35px" }}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
