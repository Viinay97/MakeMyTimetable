import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
    dropdownOptions1,
    dropdownOptions2,
    dropdownOptions3,
} from "./BasketData";
import courses from "./BasketData";
import { useNavigate } from "react-router-dom";
import "./Timetable.css";

const Timetable = () => {
    const navigate = useNavigate();
    const [selectedElectives, setSelectedElectives] = useState([]);
    const [elective, setElective] = useState({
        basket1: null,
        basket2: null,
        basket3: null,
    });

    const handleBasket1Change = (selectedElective) => {
        setElective((prevElective) => ({
            ...prevElective,
            basket1: selectedElective,
        }));
    };

    const handleBasket2Change = (selectedElective) => {
        setElective((prevElective) => ({
            ...prevElective,
            basket2: selectedElective,
        }));
    };

    const handleBasket3Change = (selectedElective) => {
        setElective((prevElective) => ({
            ...prevElective,
            basket3: selectedElective,
        }));
    };

    const submitElectives = () => {
        let id1 = elective.basket1.value;
        let id2 = elective.basket2.value;
        let id3 = elective.basket3.value;
        const selected = [courses[id1], courses[id2], courses[id3]];
        setSelectedElectives(selected);
        while (!selected) {}
        navigate("/tt/" + encodeURIComponent(JSON.stringify(selected)));
    };

    return (
        <div className="timetable-container">
            <h1 className="title">Elective selection</h1>
            <div className="select-container">
                <Select
                    className="select"
                    options={dropdownOptions1}
                    onChange={handleBasket1Change}
                    value={elective.basket1}
                    placeholder="Basket 1 elective"
                />
                <Select
                    className="select"
                    options={dropdownOptions2}
                    onChange={handleBasket2Change}
                    value={elective.basket2}
                    placeholder="Basket 2 elective"
                />
                <Select
                    className="select"
                    options={dropdownOptions3}
                    onChange={handleBasket3Change}
                    value={elective.basket3}
                    placeholder="Basket 3 elective"
                />
                <button className="select submit-button" onClick={submitElectives}>
                    SUBMIT
                </button>
            </div>
      </div>
    );
};

export default Timetable;
