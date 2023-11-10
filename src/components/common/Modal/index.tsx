import React from 'react'
import { ModalComponentStyle } from './index.style'
import { InputComponent } from '../Input'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  TextField,
} from '@mui/material'

interface ModalComponentProps {
  isOpen: boolean
  modalTitle: string
  handleClose: () => void
}

export const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { isOpen, modalTitle, handleClose } = props

  return (
    <ModalComponentStyle>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'white',
            minWidth: '673px',
            borderRadius: '12px',
            border: '1px solid #E6E5E5',
          },
          '& .MuiDialogTitle-root': {
            color: '#252C32',
            fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '-0.616px',
          },
          '& .MuiDialogContent-root': {
            paddingLeft: '10px',
            paddingRight: '10px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{ color: '#252C32' }}>
              <Typography
                sx={{
                  display: 'flex',
                  marginLeft: '15px',
                  marginRight: '15px',
                  fontFamily: 'Roboto',
                  fontSize: '13px',
                  fontWeight: '500',
                  alignItems: 'flex-end',
                }}
              >
                Take Title&nbsp;<span style={{ color: 'red' }}>*</span>
              </Typography>
              <InputComponent />
            </Box>
            <Box sx={{ color: '#252C32', marginTop: '10px' }}>
              <Typography
                sx={{
                  display: 'flex',
                  marginLeft: '15px',
                  marginRight: '15px',
                  fontFamily: 'Roboto',
                  fontSize: '13px',
                  fontWeight: '500',
                  alignItems: 'flex-end',
                }}
              >
                Take Board&nbsp;<span style={{ color: 'red' }}>*</span>
              </Typography>
              <InputComponent />
            </Box>
            <Box
              sx={{
                color: '#252C32',
                marginTop: '10px',
                marginLeft: '10px',
                marginRight: '10px',
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  paddingLeft: '5px',
                  fontFamily: 'Roboto',
                  fontSize: '13px',
                  fontWeight: '500',
                  alignItems: 'flex-end',
                }}
              >
                Summary
              </Typography>
              <TextField
                multiline
                maxRows={10}
                sx={{
                  width: 'calc(100%)',
                  color: 'red',
                  fontSize: '13px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#E0E3E7',
                    },
                    '&:hover fieldset': {
                      borderColor: '#B2BAC2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#6F7E8C',
                    },
                    '.css-18ax2bx-MuiInputBase-input-MuiOutlinedInput-input': {
                      color: '#c5c5c5',
                    },
                    '&.MuiInputBase-root': {
                      display: 'flex',
                      alignItems: 'flex-start',
                      borderRadius: '10px',
                      minHeight: '200px',
                    },
                  },
                }}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: 'white',
              backgroundColor: '#575DFB',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '10px',
              textTransform: 'none',
              marginRight: '17px',
              paddingLeft: '5px',
              paddingRight: '5px',
              '&:hover': {
                backgroundColor: '#575DFB',
              },
            }}
          >
            Create a Task
          </Button>
        </DialogActions>
      </Dialog>
    </ModalComponentStyle>
  )
}
