import React from 'react'
import { ModalComponentStyle } from './index.style'
import { InputComponent } from '../Input'
import { InputMultiline } from '../TextArea'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { AppActions, type AppDispatch } from '../../../store'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  // TextField,
  // TextareaAutosize,
} from '@mui/material'
import { type Item } from '../../../models'

interface ModalComponentProps {
  isOpen: boolean
  listId?: string
  modalTitle: string
  type?: string
  handleClose: () => void
}

const defaultValues: Pick<Item, 'title' | 'content'> = {
  title: '',
  content: '',
}

const schema = Yup.object().shape({
  title: Yup.string().required(),
})

export const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>()
  const { isOpen, listId, modalTitle, type, handleClose } = props
  const checkedListId = listId ?? 'list1'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Pick<Item, 'title' | 'content'>>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const onSubmitHandler = (data: Pick<Item, 'title' | 'content'>): void => {
    const newItem = {
      title: data.title,
      content: data.content,
      listId: checkedListId,
    }
    dispatch(AppActions.tickets.addItem(newItem))
    handleClose()
    reset()
  }

  return (
    <ModalComponentStyle>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialog"
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
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {type === 'fromList' && (
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
                    List&nbsp;<span style={{ color: 'red' }}>*</span>
                  </Typography>
                  <InputComponent />
                </Box>
              )}
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
                  Task Title&nbsp;<span style={{ color: 'red' }}>*</span>
                </Typography>
                <InputComponent
                  name="title"
                  register={register}
                  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                  error={!!errors.title}
                />
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
                <InputMultiline fieldName="content" register={register} />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              disabled={!isValid}
              type="submit"
              sx={{
                color: 'white',
                backgroundColor: '#575DFB',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '500',
                borderRadius: '10px',
                textTransform: 'none',
                marginRight: '17px',
                paddingLeft: '10px',
                paddingRight: '10px',
                '&:hover': {
                  backgroundColor: '#575DFB',
                },
              }}
            >
              Create a Task
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </ModalComponentStyle>
  )
}
