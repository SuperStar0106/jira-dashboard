import React, { useState } from 'react'
import { SiderSectionStyle } from './index.style'
import { IMAGE, PATH } from '../../../../consts'
import { Box, Button } from '@mui/material'
import {
  AppsOutlined,
  SettingsOutlined,
  HomeOutlined,
  InfoOutlined,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const ButtonComponent: React.FC<{
  buttonId: number
  selectedButton: number | null
  handleButtonClick: (buttonId: number) => void
  icon: React.ReactNode
}> = ({ buttonId, selectedButton, handleButtonClick, icon }) => {
  return (
    <Box
      className={`display-flex btn-box ${
        selectedButton === buttonId ? 'btn-box-selected' : ''
      }`}
    >
      <Button
        className={`btn ${selectedButton === buttonId ? 'btn-selected' : ''}`}
        onClick={() => {
          handleButtonClick(buttonId)
        }}
      >
        {icon}
      </Button>
    </Box>
  )
}

export const SiderSection: React.FC = () => {
  const navigate = useNavigate()
  const [selectedButton, setSelectedButton] = useState<number | null>(1)

  const handleButtonClick = (buttonId: number, url: string): void => {
    setSelectedButton(selectedButton === buttonId ? null : buttonId)
    navigate(url)
  }

  const buttons = [
    { id: 1, icon: <AppsOutlined />, url: PATH.DASHBOARD },
    { id: 2, icon: <HomeOutlined />, url: '' },
    { id: 3, icon: <SettingsOutlined />, url: '' },
    { id: 4, icon: <InfoOutlined />, url: '' },
  ]

  return (
    <SiderSectionStyle isButtonClicked={selectedButton}>
      <Box className="display-flex" sx={{ marginBottom: '50px' }}>
        <img src={IMAGE.Main.logoImg} alt="logo" className="logo_img" />
      </Box>
      {buttons.map((button) => (
        <ButtonComponent
          key={button.id}
          buttonId={button.id}
          selectedButton={selectedButton}
          handleButtonClick={() => {
            handleButtonClick(button.id, button.url)
          }}
          icon={button.icon}
        />
      ))}
    </SiderSectionStyle>
  )
}
