import React from 'react'
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import "../scss-config/material-ui.scss";

const InputText = ({ label, placeholder, type, onChange, value }) => {
	return (
		<React.Fragment>
			<FormLabel component="legend" required>
				{label}
			</FormLabel>
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
