import React, { useState } from 'react'
import { SiderSectionStyle } from './index.style'
import { IMAGE } from '../../../../consts'
import { Box, Button } from '@mui/material'
import {
  AppsOutlined,
  SettingsOutlined,
  HomeOutlined,
  InfoOutlined,
} from '@mui/icons-material'

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
  const [selectedButton, setSelectedButton] = useState<number | null>(1)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleButtonClick = (buttonId: number) => {
    setSelectedButton(selectedButton === buttonId ? null : buttonId)
  }

  const buttons = [
    { id: 1, icon: <AppsOutlined /> },
    { id: 2, icon: <HomeOutlined /> },
    { id: 3, icon: <SettingsOutlined /> },
    { id: 4, icon: <InfoOutlined /> },
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
          handleButtonClick={handleButtonClick}
          icon={button.icon}
        />
      ))}
    </SiderSectionStyle>
  )
}
