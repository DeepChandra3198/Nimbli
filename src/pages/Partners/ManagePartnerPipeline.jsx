import React, { useEffect, useState } from 'react'
// import { options2, returnStatus } from '../../../selectOption/selectOption'
// import Dropdown
// import Input from '../../UI/Input'
import { toast } from 'react-toastify';

const ManagePartnerPipeLine = ({ data, handleRefresh }) => {
    const token = localStorage.getItem('token');
    const apiUrl = import.meta.env.VITE_API_URL;
    // const today = new Date().toISOString().split('T')[0];
    const [loading, setLoading] = useState(false);
    const initialForm = {
        lastContactDate: "",
        lastContactTime: "",
        messageStatus: "",
        registrationStatus: "",
        remarks: "",
        leadId: null,
        leadStatusId: null,
    }
    const [formData, setFormData] = useState(initialForm);
    const [statusOptions, setStatusOptions] = useState([]);


    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true);
        try {
            try {
                const formDataToSend = { ...formData };
                const response = await fetch(`${apiUrl}/lead/add-followup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Specify content type
                        authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(formDataToSend)
                });
                const resData = await response.json();
                // Check for response errors
                if (!response.ok) {
                    throw new Error(resData.message || 'Failed to add followup');
                }
                handleRefresh()
                setFormData(initialForm);

                // Programmatically close the modal on component mount
                const modalElement = document.getElementById('add'); // Replace with your modal's ID
                const modalInstance = bootstrap.Modal.getInstance(modalElement);

                if (modalInstance) {
                    modalInstance.hide(); // Programmatically hides the modal
                }


                toast.success('Followup added successfully!');
            } catch (error) {
                toast.error(error.message || 'Something went wrong');
            }

        } catch (error) {
            toast.error(error.message || 'Something went wrong');
        }finally{
            setLoading(false);
        }
    }

    const fetchLeadStatusData = async () => {
        try {
            const response = await fetch(`${apiUrl}/master/lead-status-list`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
            const resData = await response.json();
            const formattedData = resData.data.map((item) => ({
                label: item.status,
                value: item.id,
                id: item.id
            }));
            setStatusOptions(formattedData);
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };



    useEffect(() => {
        fetchLeadStatusData();
        setFormData((prevForm) => ({
            ...prevForm,
            leadId: data.id
        }))

    }, [data.id])

    console.log('followData =>', formData)

    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title">Status</h5>
                <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                >
                    <i className="ti ti-x" />
                </button>
            </div>
            <div className="modal-body p-0">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <Dropdown
                                label="Lead Status"
                                name="leadStatusId"
                                // value={formData.leadStatusId}
                                // onChange={handleInputChange}
                                // options={statusOptions}
                            />

                        </div>
                
                        <div className="col-md-12">
                            <Input
                                label="Remarks"
                                type="text"
                                isMandatory
                                name="remarks"
                                // value={formData.remarks}
                                // onChange={handleInputChange}
                            />

                        </div>
                    </div>
                    <div className="form-wrap">
                        {/* <DefaultEditor className="summernote" /> */}
                    </div>
                    <div className="form-wrap" style={{ float: 'right' }}>
                        <div className="text-center">
                            <button className="btn btn-primary me-1" disabled={loading}>
                                <span> {loading? "submitting" : "Save"}</span>
                                <i className="fa-solid fa-floppy-disk ms-1" />
                            </button>

                            <button
                                className="btn btn-primary me-1"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"

                            >
                                <span>Cancel</span>{" "}
                                <i className="fa-regular fa-trash-can ms-1" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ManagePartnerPipeLine