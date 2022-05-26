export default function EditTableRow({ editFormData, adminTitle, handleEditFormChange, handleCancelClick }) {
    console.log(adminTitle)
    return (
        <tr>
            {(adminTitle === 'Users') ?
                <>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an email"
                            name="email"
                            defaultValue={editFormData.email}
                            onChange={handleEditFormChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an password"
                            name="password"
                            defaultValue={editFormData.password}
                            onChange={handleEditFormChange}
                            />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="True or False"
                            name="isAdmin"
                            defaultValue={editFormData.isAdmin}
                            onChange={handleEditFormChange}
                        />
                    </td>
                </>
            :(adminTitle === 'Podcasts') ?
                <>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an id"
                            name="id"
                            defaultValue={editFormData.id}
                            onChange={handleEditFormChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an title"
                            name="title"
                            defaultValue={editFormData.title}
                            onChange={handleEditFormChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an description"
                            name="description"
                            defaultValue={editFormData.description}
                            onChange={handleEditFormChange}
                            />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an duration"
                            name="duration"
                            defaultValue={editFormData.duration}
                            onChange={handleEditFormChange}
                            />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an image"
                            name="image"
                            defaultValue={editFormData.image}
                            onChange={handleEditFormChange}
                            />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an audio preview"
                            name="audioPreview"
                            defaultValue={editFormData.audioPreview}
                            onChange={handleEditFormChange}
                            />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an full audio"
                            name="fullAudio"
                            defaultValue={editFormData.fullAudio}
                            onChange={handleEditFormChange}
                            />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="True or False"
                            name="isPodcast"
                            defaultValue={editFormData.isPodcast}
                            onChange={handleEditFormChange}
                        />
                    </td>
                </>
            :
                <>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an title"
                            name="title"
                            defaultValue={editFormData.title}
                            onChange={handleEditFormChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter an type"
                            name="type"
                            defaultValue={editFormData.type}
                            onChange={handleEditFormChange}
                            />
                    </td>
                    <td>
                        <input 
                            type="text"
                            required="required"
                            placeholder="Enter content by podcast id"
                            name="content"
                            defaultValue={editFormData.content}
                            onChange={handleEditFormChange}
                        />
                    </td>
                </>
            }
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
  )
}