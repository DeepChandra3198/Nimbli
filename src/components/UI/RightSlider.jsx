
// eslint-disable-next-line react/prop-types
const RightSlider = ({ showSlider, children }) => {
    return (
        <div className={`toggle-popup ${showSlider ? "sidebar-popup" : ""}`}>
            <div className="sidebar-layout">
                {children}
            </div>
        </div>
    )
}

export default RightSlider