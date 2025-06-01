import React, { useState } from "react";

function RadioButton({label }) {
    const [formData, setFormData] = useState({
        travelType: "domestic", // Default selected value
    });

    const travelTypes = [
        { id: "domestic", label: "Domestic" },
        { id: "overseas", label: "Overseas" },
    ];

    const handleChange = (event) => {
        setFormData({ ...formData, travelType: event.target.value });
    };

    return (
        <div className="col-md-10">
            <div className="form-wrap radio-wrap">
                <label className="col-form-label" style={{ paddingBottom: "5px" }}>
                    {label}
                </label>
                <div className="d-flex flex-wrap">
                    {travelTypes.map((type) => (
                        <div className="radio-btn" key={type.id}>
                            <input
                                type="radio"
                                className="status-radio"
                                id={type.id}
                                name="travelType"
                                value={type.id}
                                checked={formData.travelType === type.id}
                                onChange={handleChange}
                            />
                            <label htmlFor={type.id}>{type.label}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RadioButton;
