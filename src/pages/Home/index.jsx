import React, { useState, useEffect } from "react";
import { NavBar, Container } from "./style";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { postTask } from "../../store/tasks/postTask";
import { listTasks } from "../../store/tasks/listTasks";

const Home = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [annotations, setAnnotations] = useState([]);
    const [isAnnotating, setIsAnnotating] = useState(false);
    const [startPoint, setStartPoint] = useState(null);

    const postTaskState = useSelector((state) => state.postTask);
    const { data, loading } = useSelector((state) => state.listTasks);

    const handleListTasks = () => {
        dispatch(listTasks());
    };

    useEffect(() => {
        handleListTasks();
    }, []);

    const handlePostData = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", title);
        formData.append("description", description);
        formData.append("image", image);

        // Add annotations to the payload
        if (annotations.length > 0) {
            formData.append("annotations", JSON.stringify(annotations));
        }

        dispatch(postTask(formData));
    };

    const handleMouseDown = (e) => {
        setIsAnnotating(true);
        const rect = e.target.getBoundingClientRect();
        const startX = e.clientX - rect.left;
        const startY = e.clientY - rect.top;
        setStartPoint({ x: startX, y: startY });
    };

    const handleMouseUp = (e) => {
        if (!isAnnotating || !startPoint) return;
        const rect = e.target.getBoundingClientRect();
        const endX = e.clientX - rect.left;
        const endY = e.clientY - rect.top;

        const newAnnotation = {
            startX: startPoint.x,
            startY: startPoint.y,
            endX,
            endY,
        };

        setAnnotations([...annotations, newAnnotation]);
        setIsAnnotating(false);
        setStartPoint(null);
    };

    const handleMouseMove = (e) => {
        if (!isAnnotating || !startPoint) return;
        // Optionally, you can update the annotations dynamically here for a live preview.
    };

    return (
        <>
            <NavBar>
                <p>LabelBox</p>
            </NavBar>
            <Container>
                <div className="content">
                    <div className="card-list">
                        {data?.map((item, index) => (
                            <Card
                                key={index}
                                title={item.name}
                                description={item.description}
                                image={item.image}
                            />
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
                                placeholder="Title"
                            />
                            <Input
                                topText="Description"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                            />
                            <Input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                accept="jpg,png,webp"
                            />
                            {image && (
                                <div
                                    className="image-preview"
                                    style={{ position: "relative" }}
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={handleMouseUp}
                                    onMouseMove={handleMouseMove}
                                >
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Selected"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "cover",
                                        }}
                                    />
                                    {/* Display Annotations */}
                                    {annotations.map((annotation, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                position: "absolute",
                                                border: "2px solid red",
                                                left: annotation.startX,
                                                top: annotation.startY,
                                                width:
                                                    annotation.endX -
                                                    annotation.startX,
                                                height:
                                                    annotation.endY -
                                                    annotation.startY,
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            )}
                            <Button
                                type="submit"
                                onClick={handlePostData}
                            >
                                {postTaskState?.loading
                                    ? "Submitting . . ."
                                    : "Submit"}
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;