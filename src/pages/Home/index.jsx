import React from "react";
import { NavBar, Container } from "./style";
import Input from "../../components/Input";

import Card from "../../components/Card";
import Button from "../../components/Button";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postTask } from "../../store/tasks/postTask";
import { listTasks } from "../../store/tasks/listTasks";
import { use } from "react";




const Home = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const postTaskState = useSelector(state => state.postTask);
    const {data, loading} = useSelector(state => state.listTasks);

    const handleListTasks = () => {
        dispatch(listTasks());
    }

    useEffect(() => {
        handleListTasks()
    }, [])

    // const data = [
    //     {
    //         "title": "Title 1", 
    //         "description": "Description 1",
    //         "image": "https://plus.unsplash.com/premium_photo-1723759360356-1aa8bcfd02af?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //         "title": "Title 1", 
    //         "description": "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content",
    //         "image": "https://images.unsplash.com/photo-1731156607191-af929d3d0fe2?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    // ]

    const handlePostData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", title);
        formData.append("description", description);
        formData.append("image", image);
        dispatch(postTask(formData));
    }
  return (
    <>
        <NavBar>
            <p>LabelBox</p>
        </NavBar>
        <Container>
            <div className="content">

                <div className="card-list">
                    {data?.map(item => (
                        <Card 
                            title={item.name} 
                            description={item.description} 
                            image={item.image} />
                    ))}

                </div>

                <div className="form">
                    <form>
                        <h2>Add New Task</h2>
                        <Input 
                            topText="Title" 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title" />

                        <Input 
                            topText="Description" 
                            type="text" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description" />
                        <Input 
                            type="file" 
                            onChange={(e) => setImage(e.target.files[0])}
                            accept="jpg,png,webp" />
                        
                        {image && (
                            <div className="image-preview">
                                <img src={URL.createObjectURL(image)} alt="Selected" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                            </div>
                        )}


                        <Button type="submit" onClick={handlePostData}>{postTaskState?.loading ? "submiting . . ." : "Submit"}</Button>
                    </form>
                </div>
            </div>
        </Container>
    </>
  );
}

export default Home;