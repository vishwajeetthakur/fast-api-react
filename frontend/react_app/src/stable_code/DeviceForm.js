import React, { useState } from 'react';
import axios from 'axios';

function DeviceForm() {
    const [formData, setFormData] = useState({
        equip_inst_id: 0,
        status: "",
        category: "",
        vendor: "",
        model: "",
        sanitize_model_id: 0,
        description: "",
        shelf: "",
        hostname: "",
        ip_address_v4: "",
        netmask_v4: "",
        ip_address_v6: "",
        netmask_v6: ""
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`devices/${formData.equip_inst_id}`, formData);
            setResponse(res.data);
        } catch (error) {
            console.error("Error updating device:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* ... render form fields based on formData ... */}
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    {/* ... display the response data ... */}
                </div>
            )}
        </div>
    );
}

export default DeviceForm;
