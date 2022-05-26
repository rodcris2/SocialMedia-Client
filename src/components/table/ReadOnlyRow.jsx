export default function ReadOnlyRow({ content, adminTitle, handleEditClick, handleDeleteClick }) {
    // console.log(adminTitle)
  return (
        <tr>
          {adminTitle === 'Users' ?
            <>
              <td>{content?.email}</td>
              <td>{content?.password}</td>
              <td>{content?.isAdmin ? 'true' : 'false'}</td>
            </>
          : adminTitle === 'Podcasts' ?
            <>
              <td>{content?.id}</td>
              <td>{content?.title}</td>
              <td>{content?.description}</td>
              <td>{content?.duration}</td>
              <td>{content?.image}</td>
              <td>{content?.audioPreview}</td>
              <td>{content?.fullAudio}</td>
              <td>{content?.isPodcast ? 'true' : 'false'}</td>
            </>
          :
            <>
              <td>{content?.title}</td>
              <td>{content?.type}</td>
              <td>{content?.content}</td>
            </>
          }
            <td>
              <button type="button" onClick={(e) =>handleEditClick(e, content)}>Edit</button>
              <button type="button" onClick={() => handleDeleteClick(content.id)}>Delete</button>
            </td>
        </tr>
  )
}