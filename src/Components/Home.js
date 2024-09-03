import "../App.css";
import Notes from "./Notes";

export default function Home(props) {
  return (
    <div>
      <div
        className="form-outer-container"
        style={{
          backgroundColor: props.mode === "dark" ? "#19191a" : "#f8f9fa", // Dark mode background
          color: props.mode === "dark" ? "white" : "black", // Dark mode text color
          border:
            props.mode === "dark" ? "1px solid #f8f9fa" : "1px solid #343a40", // Border color change
        }}
      >
        <div className="form-container">
          <form>
            <div className="form-group">
              <label
                htmlFor="title"
                className={`form-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="Enter title"
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="description"
                className={`form-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="form-input"
                placeholder="Enter description"
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="tag"
                className={`form-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Tag
              </label>
              <select
                id="tag"
                name="tag"
                className="form-select"
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <option value="work">Personal</option>
                <option value="personal">Work</option>
                <option value="important">Important</option>
                <option value="urgent">Urgent</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="form-group">
              <label
                htmlFor="note"
                className={`form-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Note
              </label>
              <textarea
                id="note"
                name="note"
                className="form-textarea"
                placeholder="Write your note here..."
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn btn-${props.mode === "dark" ? "light" : "dark"}`}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
      <Notes />
    </div>
  );
}
