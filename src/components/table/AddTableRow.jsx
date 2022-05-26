import "./addTableRow.css";

export default function AddTableRow({ adminTitle, handleAddFormChange, handleAddFormSubmit }) {
    return (
        <form id="addRow" className="addTableRow" onSubmit={handleAddFormSubmit}>
            {(adminTitle === 'Podcasts') ?
                <>
                    <div className="addTableItem">
                        <label>Title</label>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an title"
                            name="title"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <div className="addTableItem">
                        <label>Description</label>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an description"
                            name="description"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <div className="addTableItem">
                        <label>Duration</label>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an duration"
                            name="duration"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <div className="addTableItem">
                        <label>Image</label>
                        <input 
                            type="file"
                            required="required"
                            name="image"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <div className="addTableItem">
                        <label>Audio Preview</label>
                        <input 
                            type="file"
                            required="required"
                            name="audioPreview"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <div className="addTableItem">
                        <label>Full Audio</label>
                        <input 
                            type="file"
                            required="required"
                            name="fullAudio"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <div className="addTableItem">
                        <label>Is an Podcast?</label>
                        <select
                            type="text"
                            required="required"
                            placeholder="True or False"
                            name="isPodcast"
                            onChange={handleAddFormChange}
                        >
                            <option>Select</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>

                    <button className="addTableButton" type="submit">Upload</button>
                </>
            :(adminTitle === 'Lists') ?
                <>
                    <div className="addTableItem">
                        <label>Title</label>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an title"
                            name="title"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <div className="addTableItem">
                        <label>Type</label>
                        <select 
                            type="text"
                            required="required"
                            placeholder="Enter an type"
                            name="type"
                            onChange={handleAddFormChange}
                        >
                            <option>Type</option>
                            <option value="podcast">Podcast</option>
                            <option value="vlog">Vlog</option>
                        </select>
                    </div>

                    <div className="addTableItem">
                        <label>Content</label>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter content by podcast id"
                            name="content"
                            onChange={handleAddFormChange}
                        />
                    </div>

                    <button className="addTableButton" type="submit">Upload</button>
                </>
            :
            <>
            </>
            }
        </form>
  )
}