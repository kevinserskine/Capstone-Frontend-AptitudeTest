import React from 'react'
import { TextField, Grid } from '@mui/material'
export default function InputForm(props) {
    return (
        <Grid item xs={props.SpacingVal}>
            <TextField
                id={props.idName}
                label={props.label}
                name={props.idName}
                fullWidth
                multiline={!!props.isMultiline}
                rows={props.rows}
                required={!!props.isRequired}
                value={props.textVal || ''}
                variant="outlined"
                onChange={props.onChange}
                InputLabelProps={{
                    shrink: !!props.textVal,
                }}
                InputProps={{
                    inputProps: { maxLength: props.maxLenChar },
                }}
            />
        </Grid>
    )
}
