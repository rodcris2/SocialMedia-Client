import axios from "axios";
import { axiosInstance } from '../../config';
import { config } from '../../routes/auth';
import { useState, useEffect, Fragment } from "react"
import ReadOnlyRow from '../table/ReadOnlyRow';
import EditTableRow from '../table/EditTableRow';
import AddTableRow from '../table/AddTableRow';
import Navbar from "../navbar/Navbar";
import { nanoid } from 'nanoid';
import "./admin.css";

export default function Admin() {
    const[adminTitle, setAdminTitle] = useState("Users");
    const[contents, setContents] = useState([]);
    const[addFormData, setAddFormData] = useState((adminTitle === 'Podcasts') ? {
        title: "",
        description: "",
        duration: "",
        image: null,
        audioPreview: null,
        fullAudio: null,
        isPodcast: ""
    } :(adminTitle === 'Lists') ? {
        title: "",
        type: "",
        content: ""
    } : {});

    const[editFormData, setEditFormData] = useState((adminTitle === 'Users') ? {
        email: "",
        password: "",
        isAdmin: ""
    }:(adminTitle === 'Podcasts') ? {
        id: "",
        title: "",
        description: "",
        duration: "",
        image: "",
        audioPreview: "",
        fullAudio: "",
        isPodcast: ""
    } : {
        title: "",
        type: "",
        content: ""
    });

    const[editFormDataContent, setEditFormDataContent] = useState((adminTitle === 'Lists') ? {
        title: "",
        type: "",
        content: ""
    }: {});
    
    const[editContentId, setEditContentId] = useState(null);
    const[firstButtonTitle, setFirstButtonTitle] = useState("Podcasts")
    const[secondButtonTitle, setSecondButtonTitle] = useState("Lists")

    useEffect(() => {
        axiosInstance.get('/' + adminTitle, config).then((response) => {
          setContents(response.data);
        }).catch((error) => {
          console.log(error)
        })
    }, [adminTitle]);

    const firstButtonClicked = () => {
        setAdminTitle(firstButtonTitle)
        setFirstButtonTitle(adminTitle)
    }

    const secondButtonClicked = () => {
        setAdminTitle(secondButtonTitle)
        setSecondButtonTitle(adminTitle)
    }

    function url(file, fieldName){
        return new Promise((resolve) => {
            var reader = new FileReader();
            
            reader.readAsDataURL(file);
            reader.onload = () => {
                var Base64 = reader.result;
                const data = axiosInstance.post("/file", {file: Base64, name: file.name, folderName: fieldName}, config);
                return resolve(data);
            };
        })
    }

    const handleAddFormChange = async (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        let fieldValue;
        
        if(fieldName === 'image' || fieldName === 'audioPreview' || fieldName === 'fullAudio'){
            const response = await url(e.target.files[0], fieldName);
            fieldValue = `${response.data.uploadResult.Location}`;
        } else {
            fieldValue = e.target.value;
        }

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    console.log(addFormData);

    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newContent = (adminTitle === 'Podcasts') ? {
            id: nanoid(),
            title: addFormData.title,
            description: addFormData.description,
            duration: addFormData.duration,
            image: addFormData.image,
            audioPreview: addFormData.audioPreview,
            fullAudio: addFormData.fullAudio,
            isPodcast: addFormData.isPodcast
        } : {
            id: nanoid(),
            title: addFormData.title,
            type: addFormData.type,
            content: addFormData.content.split(',')
        };

        const newContents = [...contents, newContent];

        if(adminTitle === 'Podcasts'){
            axiosInstance.post("/podcast", newContent, config).then((response) => {
                setContents(newContents);
            }).catch((error) => {
                console.log(error.response);
            })
        } else {
            axiosInstance.post("/lists", newContent, config).then((response) => {
                setContents(newContents);
            }).catch((error) => {
                console.log(error.response);
            })
        }

        const form = document.getElementById('addRow');
        form.reset();
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedContent = (adminTitle === 'Users') ? {
            id: editContentId,
            email: editFormData.email,
            password: editFormData.password,
            isAdmin: editFormData.isAdmin
        } : (adminTitle === 'Podcasts') ? {
            id: editContentId,
            title: editFormData.title,
            description: editFormData.description,
            duration: editFormData.duration,
            image: editFormData.image,
            audioPreview: editFormData.audioPreview,
            fullAudio: editFormData.fullAudio,
            isPodcast: editFormData.isPodcast
        } : {
            id: editContentId,
            title: editFormData.title,
            type: editFormData.type,
            content: (editFormData.content === editFormDataContent.content) ? editFormData.content : editFormData.content.split(',')
        }

        const newContents = [...contents];

        const index = contents.findIndex((content) => content.id === editContentId);

        newContents[index] = editedContent;

        if(adminTitle === 'Users'){
            axiosInstance.put("/user", editedContent, config).then((response) => {
                setContents(newContents);
            }).catch((error) => {
                console.log(error.response);
            })
        }else if(adminTitle === 'Podcasts'){
            axiosInstance.put("/podcast", editedContent, config).then((response) => {
                setContents(newContents);
            }).catch((error) => {
                console.log(error.response);
            })
        } else {
            axiosInstance.put("/lists", editedContent, config).then((response) => {
                setContents(newContents);
            }).catch((error) => {
                console.log(error.response);
            })
        }

        setEditContentId(null);
    }

    const handleEditClick = (e, content) => {
        e.preventDefault();
        setEditContentId(content.id);

        const formValues = (adminTitle === 'Users') ? {
            email: content?.email,
            password: content?.password,
            isAdmin: content?.isAdmin
        } : (adminTitle === 'Podcasts') ? {
            id: content?.id,
            title: content?.title,
            description: content?.description,
            duration: content?.duration,
            image: content?.image,
            audioPreview: content?.audioPreview,
            fullAudio: content?.fullAudio,
            isPodcast: content?.isPodcast
        } : {
            title: content?.title,
            type: content?.type,
            content: content?.content,
        }

        setEditFormData(formValues);
        setEditFormDataContent(formValues);
    }

    const handleCancelClick = () => {
        setEditContentId(null);
    }

    const handleDeleteClick = (contentId) => {
        const newContents = [...contents];

        const index = contents.findIndex((content) => content.id === contentId);
        const deleteContent = newContents.splice(index, 1)[0];

        if(adminTitle === 'Users'){
            axios({
                method: "delete",
                url: "https://ul0a7kfzof.execute-api.us-east-1.amazonaws.com/beta/user",
                headers: {"x-api-key": "ZEA7P1Twzv8Ttcz5FIz2F34VYB7hybDY9GCpNTpy"},
                data: {deleteContent}
            }).then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.log(error.response);
            })
        } else if(adminTitle === 'Podcasts'){
            axios({
                method: "delete",
                url: "https://ul0a7kfzof.execute-api.us-east-1.amazonaws.com/beta/podcast",
                headers: {"x-api-key": "ZEA7P1Twzv8Ttcz5FIz2F34VYB7hybDY9GCpNTpy"},
                data: {deleteContent}
            }).then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.log(error.response);
            })
        } else if(adminTitle === 'Lists'){
            axios({
                method: "delete",
                url: "https://ul0a7kfzof.execute-api.us-east-1.amazonaws.com/beta/lists",
                headers: {"x-api-key": "ZEA7P1Twzv8Ttcz5FIz2F34VYB7hybDY9GCpNTpy"},
                data: {deleteContent}
            }).then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.log(error.response);
            })
        }

        setContents(newContents);
    }

    return (
        <div className="admin">
            <Navbar />
            <div className="adminHeader">
                <span className="adminListTitle">{adminTitle}</span>
                <div className="adminButtons">
                    <button className="adminButton" onClick={firstButtonClicked}>{firstButtonTitle}</button>
                    <button className="adminButton" onClick={secondButtonClicked}>{secondButtonTitle}</button>
                </div>
            </div>
            <div className="adminBody">
                <div className="adminBodyContent">
                    <form onSubmit={handleEditFormSubmit}>
                        <table>
                            <thead>
                                <tr>
                                    {adminTitle === 'Users' ?
                                        <>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Is an Admin</th>
                                            <th>Actions</th>
                                        </>
                                    :adminTitle === 'Podcasts' ?
                                        <>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Duration</th>
                                            <th>Image</th>
                                            <th>Audio Preview</th>
                                            <th>Full Audio</th>
                                            <th>Is an Podcast</th>
                                            <th>Actions</th>
                                        </>
                                    :
                                        <>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Content</th>
                                            <th>Actions</th>
                                        </>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {contents.map((content, i) => (
                                    <Fragment>
                                        {editContentId === content.id ? (
                                            <EditTableRow 
                                                key={i}
                                                editFormData={editFormData} 
                                                adminTitle={adminTitle}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                            /> 
                                        ) : (
                                            <ReadOnlyRow 
                                                key={i}
                                                content={content} 
                                                adminTitle={adminTitle}
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                            />
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </form>
                </div>
                <AddTableRow adminTitle={adminTitle} handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit}/>
            </div>
        </div>
    )
}
