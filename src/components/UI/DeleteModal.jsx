

// eslint-disable-next-line react/prop-types
const DeleteModal = ({ modalId, children }) => {
  return (
    <div className="modal custom-modal fade" id={modalId} role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        {children}
      </div>
    </div>
  )
}

export default DeleteModal