import React from 'react'
import TextField from '@mui/material/TextField';
import "../scss-config/material-ui.scss";

const InputText = ({ placeholder, type, onChange, value }) => {
	return (
		<React.Fragment>
			<TextField
				required
				placeholder={placeholder}
				variant="outlined"
				margin="normal"
				className="input"
				size="small"
				type={type}
				onChange={onChange}
				value={value}
			/>
		</React.Fragment>
	)
}

export default InputText;
