import React, { useState } from "react";
import css from "./AddCardModal.module.css";

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [showText, setShowText] = useState(false);

  const handleAddClick = () => {
    setShowText(true);
  };

  const handleAddCard = () => {
    handleCardAdd(title, detail);
    setDetail("");
    setTitle("");
    setShowText(false);
  };

  return (
    <div className={visible ? css.modalOverlay : css.hidden}>
      <div className={css.modal}>
        <div className={css.container}>
          {showText ? (
            <div>
              <p>Click "Add" to add a card.</p>
            </div>
          ) : (
            <>
              <div>
                <span className={css.label}>Card Title</span>
                <input
                  type="text"
                  className={css.input}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <span className={css.label}> Detail</span>
                <textarea
                  rows={10}
                  className={css.input}
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </div>
            </>
          )}

          {!showText && (
            <button
              className={css.saveButton}
              disabled={title === "" && detail === ""}
              onClick={handleAddClick}
            >
              Add
            </button>
          )}

          {showText && (
            <button className={css.saveButton} onClick={handleAddCard}>
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
