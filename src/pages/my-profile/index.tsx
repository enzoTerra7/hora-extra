import { Avatar } from '@mui/material'
import { ContainerComponent } from 'components/Container'
import { Layout } from 'components/layouts/layout/main'
import React, { useState, useEffect, useCallback } from 'react'
import { BiPen, BiPencil, BiUser } from 'react-icons/bi'
import * as Styles from 'styles/pages/MyProfile/styles'
import Cookies from 'js-cookie'
import { IconButton } from 'components/IconButton'
import { CurrencyInput, InputComponent, NumberInput } from 'components/Input'
import { api } from 'src/service/api'
import axios from 'axios'
import { MdCheck, MdCheckCircle, MdCloudUpload, MdDeleteForever } from 'react-icons/md'
import { Dialog } from 'components/Dialog'
import { ButtonComponent } from 'components/Button'
import { HiFolderAdd } from 'react-icons/hi'
import { MyDropzoneFiles } from 'components/Dropzone'
import { useAlert } from 'src/hooks/useAlert'
import { Loader } from 'components/Loader'
import { uploadImage } from 'lib/cloudnary'

export interface MyProfileProps {
  className?: string
  // user: UserInformation
}

export interface UserInformation {
  name: string,
  email: string,
  avatar: string,
  salary: number,
  hours_per_month: number
}

const MyProfile = (props: MyProfileProps) => {

  const { showAlert } = useAlert()

  const [sending, setSending] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [user, setUser] = useState<UserInformation>({
    name: '',
    email: '',
    avatar: '',
    salary: 0,
    hours_per_month: 0,
  })
  const [openModal, setOpenModal] = useState(false)
  const [imageFile, setImageFile] = useState<any>(null)
  const [removeImage, setRemoveImage] = useState(false)
  const [modalPreviewUrl, setModalPreviewUrl] = useState('')

  const handleUser = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/user/user?id=${Cookies.get('userId')}`)
      setUser({
        ...data.data,
        avatar: data.data.avatar == null ? null : data.data.avatar
      })
    } catch (e) {

    }
  }, [])

  const attUser = async () => {
    try {
      setSending(true)
      if(imageFile) {
        const FD = new FormData()
        FD.append('file', imageFile)
        await axios.patch(`/api/user/image?id=${Cookies.get('userId')}&file=${JSON.stringify(imageFile)}`,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        )
      } else if (removeImage) {
        await axios.put(`/api/user/image?id=${Cookies.get('userId')}`, {
          file: null
        })
      }
      await axios.put(`/api/user/user?id=${Cookies.get('userId')}`, {
        ...user
      })
      setDisabled(true)
      showAlert({
        severity: 'success',
        title: 'Usu??rio editado com sucesso'
      })
    } catch(e) {
      console.log(e)
      showAlert({
        severity: 'error',
        title: 'Usu??rio n??o foi editado'
      })
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    const isMounted = true

    if (!isMounted) return

    handleUser()
  }, [handleUser])

  return (
    <Styles.Container className={props.className}>
      <Layout
        lowerBarProps={{
          breadcrumbs: [
            {
              text: 'Meu Perfil',
              href: '/my-profile'
            }
          ],
          icon: <BiUser size={50} title="MyProfile" />,
          mainButton: {
            text: disabled ? 'Editar' : 'Salvar',
            model: 'primary',
            onClick: () => disabled ? setDisabled(false) : attUser(),
            leftIcon: disabled ? <BiPencil size={20} title="Editar" /> : <MdCheckCircle size={20} title="Salvar" />
          },
          secondaryButton: !disabled && {
            model: 'other',
            text: 'Cancelar edi????o',
            onClick: () => setDisabled(true)
          }
        }}
      >
        <ContainerComponent
          title="Meu perfil"
          subtitle='Veja os dados do seu usu??rio'
        >
          <Styles.Content>
            <Styles.ImageContainer className="imgContainer">
              <IconButton
                className='editProfile'
                model='primary'
                icon={<BiPencil size={20} title="Editar foto" />}
                onClick={() => setOpenModal(true)}
                disabled={disabled}
              />
              <Avatar
                src={user?.avatar}
                alt="Imagem do usu??rio"
              />
              {(!disabled && (user.avatar)) && (
                <ButtonComponent
                  model='other'
                  className="removeImage"
                  text="Remover foto"
                  leftIcon={<MdDeleteForever size={20} title="Remover foto" />}
                  onClick={() => {
                    setUser({ ...user, avatar: '' })
                    setImageFile(null)
                    setRemoveImage(true)
                  }}
                  name="removerFoto"
                />
              )}
            </Styles.ImageContainer>
            <Styles.Divisor />
            <Styles.GridInformation className="gridContainer" >
              <InputComponent
                disabled={disabled}
                label="Nome"
                value={user.name}
                placeholder="Inserir o seu nome"
                onChange={(e) => setUser({ ...user, name: e.target.value})}
              />
              <InputComponent
                disabled={disabled}
                label="Email"
                placeholder="Inserir o seu email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value})}
              />
              <NumberInput
                disabled={disabled}
                label="Horas por m??s"
                value={user.hours_per_month}
                placeholder="Inserir o seu nome"
                onChange={(e) => setUser({ ...user, hours_per_month: e.target.value})}
              />
              <CurrencyInput
                disabled={disabled}
                label="Sal??rio"
                placeholder="Inserir o seu sal??rio"
                value={user.salary}
                onChange={(e) => setUser({ ...user, salary: e.target.value})}
              />
            </Styles.GridInformation>
          </Styles.Content>
        </ContainerComponent>
      </Layout>
      {openModal && (
        <Dialog
          onClose={() => setOpenModal(false)}
          allowOverlayClick={false}
          img={<MdCloudUpload size={30} title="Envie sua foto" />}
          title='Envie sua imagem (.png, .jpeg ou .jpg)'
          jsx={<>
            {modalPreviewUrl ? (
              <Styles.PreviewContainer>
                <Styles.ImagePreview>
                  <Avatar
                    variant="square"
                    alt="Preview da imagem do usu??rio"
                    src={modalPreviewUrl}
                  />
                </Styles.ImagePreview>
                <div className="resendImage">
                  <MyDropzoneFiles
                    preview={setModalPreviewUrl}
                    saveFile={setImageFile}
                  >
                    <ButtonComponent
                      model="other"
                      text="Enviar outra foto"
                      name="mandarOutraFoto"
                    />
                  </MyDropzoneFiles>
                </div>
              </Styles.PreviewContainer>
            ) : (
              <MyDropzoneFiles
                preview={setModalPreviewUrl}
                saveFile={setImageFile}
              >
                <Styles.SendImageContainer id="mandarFoto">
                  <HiFolderAdd size={70} title="Enviar foto" />
                  <span>Clique aqui ou arraste sua foto</span>
                </Styles.SendImageContainer>
              </MyDropzoneFiles>
            )}
          </>}
          mainButton={{
            text: 'Confirmar',
            leftIcon: <MdCheck size={20} title="Confirmar" />,
            model: 'primary',
            onClick: () => {
              setUser({ ...user, avatar: modalPreviewUrl })
              setModalPreviewUrl('')
              setRemoveImage(false)
            },
            name: 'salvarFoto'
          }}
          secondaryButton={{
            text: 'Cancelar',
            model: 'other',
            onClick: () => {
              setModalPreviewUrl('')
              setImageFile(null)
            },
            name: 'cancelarFoto'
          }}
        />
      )}
      <Loader show={sending} />
    </Styles.Container>
  )
}

export default MyProfile