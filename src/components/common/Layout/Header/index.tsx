import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderSectionStyle } from './index.style'
import { ButtonComponent } from '../../Button'
import { InputComponent } from '../../Input'
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Fade,
  ListItemText,
  Typography,
  Avatar,
  Badge,
} from '@mui/material'
import {
  ExpandMoreOutlined,
  NotesOutlined,
  CalendarMonthOutlined,
  ViewQuiltOutlined,
  BorderColorOutlined,
  Notifications,
  SearchOutlined,
} from '@mui/icons-material'
import { IMAGE, PATH } from '../../../../consts'

interface FadeMenuComponentProps {
  activeButton: string
  setActiveButton: (button: string) => void
}

export const FadeMenuComponent: React.FC<FadeMenuComponentProps> = (props) => {
  const { activeButton, setActiveButton } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
    setActiveButton('fadeMenu')
  }

  const handleClose: () => void = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        id="fade-button"
        aria-controls={anchorEl !== null ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl !== null ? 'true' : undefined}
        onClick={(e) => {
          handleClick(e)
        }}
        startIcon={<NotesOutlined />}
        endIcon={<ExpandMoreOutlined />}
        sx={{
          color: activeButton === 'fadeMenu' ? '#6772FE' : '#2A303C',
          fontWeight: 600,
          textTransform: 'none',
        }}
      >
        Board
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            backgroundColor: 'white',
            width: '172px',
            borderRadius: '10px',
            color: '#252C32',
          },
        }}
      >
        <MenuItem
          onClick={(e) => {
            handleClose()
          }}
          key="1"
        >
          <ListItemText>My Tasks</ListItemText>
          <Typography variant="body2" color="#252C32">
            <BorderColorOutlined />
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            handleClose()
          }}
          key="2"
        >
          Create a Board
        </MenuItem>
      </Menu>
    </Box>
  )
}

export const HeaderSection: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('')
  const navigate = useNavigate()

  return (
    <HeaderSectionStyle>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <FadeMenuComponent
          setActiveButton={(button: string) => {
            setActiveButton(button)
          }}
          activeButton={activeButton}
        />
        <Box>
          <Button
            id="list-button"
            startIcon={<ViewQuiltOutlined />}
            sx={{
              color: activeButton === 'list' ? '#6772FE' : '#2A303C',
              fontWeight: 600,
              textTransform: 'none',
            }}
            onClick={() => {
              setActiveButton('list')
            }}
          >
            List
          </Button>
        </Box>
        <Box>
          <Button
            id="calendar-button"
            startIcon={<CalendarMonthOutlined />}
            sx={{
              color: activeButton === 'calendar' ? '#6772FE' : '#2A303C',
              fontWeight: 600,
              textTransform: 'none',
            }}
            onClick={() => {
              setActiveButton('calendar')
            }}
          >
            Calendar
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Box sx={{ maxHeight: '65px' }}>
          <InputComponent
            placeholder="Search here..."
            sx={{ borderRadius: '100px' }}
            type="end_icon_input"
            icon={<SearchOutlined />}
          />
        </Box>
        <Box className="justify-content-center">
          <ButtonComponent
            type="submit"
            className="create_btn"
            onClick={() => {
              navigate(PATH.TASKINSERT)
            }}
          >
            + Create New Task
          </ButtonComponent>
        </Box>
        <Box className="justify-content-center">
          <Badge badgeContent={12} color="primary" className="badge">
            <Notifications
              color="action"
              style={{ color: '#B6B6B6', fontSize: '40px' }}
            />
          </Badge>
        </Box>
        <Box sx={{ display: 'flex', gap: '14px' }}>
          <Box className="justify-content-center">
            <Avatar alt="user_avatar" src={IMAGE.DashBoard.avatarImg}></Avatar>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }}>avtanwar</Typography>
            <Typography>UI/UX Designer</Typography>
          </Box>
        </Box>
      </Box>
    </HeaderSectionStyle>
  )
}
