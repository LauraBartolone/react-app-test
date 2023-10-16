import CloseIcon from '@mui/icons-material/Close';

function SideModal({ children, id, side='left', title }) {
  
	return (
	  <>
		 <div className={`modal fade ${side}`}  id={id} tabIndex="-1" role="dialog" aria-labelledby={id+"Label"}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">

					<div className="modal-header">
						{title && <h4 className="modal-title t-headline-5" id={id+"Label"}> {title}</h4>}
						
						<button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
							<CloseIcon data-bs-dismiss="modal"></CloseIcon>
						</button>
					</div>

					<div className="modal-body">
						{children}
					</div>

				</div>
			</div>
		</div>
		
	  </>
	);
}
  

export default SideModal;