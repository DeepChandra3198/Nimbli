import React from 'react'

const FilterSubCollapse = () => {
  return (
    <div className="filter-set-content">
    <div className="filter-set-content-head">
        <Link
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
        >
            State
        </Link>
    </div>
    <div
        className="filter-set-contents accordion-collapse collapse show"
        id="collapseTwo"
        data-bs-parent="#accordionExample"
    >
        <div className="filter-content-list">
            <div className="col-md-12">
                <div className="form-wrap">
                    <Select
                        isMulti
                        classNamePrefix="react-select"
                        className="basic-multi-select"
                        value={statesOptions.filter(option => filterByStates.includes(option.value))}
                        onChange={(selectedOptions) => {
                            const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
                            setFilterByStates(values)
                        }}
                        options={statesOptions}
                        components={{ Option: CheckboxOption }} // Use custom checkbox component
                        closeMenuOnSelect={false} // Keep menu open after selecting
                        hideSelectedOptions={false} // Show selected options in dropdown
                    />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FilterSubCollapse