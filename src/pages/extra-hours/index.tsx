import React, { useState, useEffect, useCallback } from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import * as Styles from 'styles/pages/ExtraHours/List/styles'
import { FaPlus } from 'react-icons/fa'
import { Layout } from 'components/layouts/layout/main'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Accordion } from '@mui/material'
import { Heading } from 'components/Heading'
import { Dialog } from 'components/Dialog'
import { InputComponent } from 'components/Input'
import { FcMoneyTransfer } from 'react-icons/fc'
import { Loader } from 'components/Loader'
import { useAlert } from 'src/hooks/useAlert'

export interface ExtraHoursListProps {
  className?: string
}

export interface ExtrasType {
  id: number
  month: string
  total: number
}

const ExtraHoursList = (props: ExtraHoursListProps) => {

  const { showAlert } = useAlert()

  const [extras, setExtras] = useState<ExtrasType[]>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [sending, setSending] = useState(false)

  const handleExtras = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/extras/month?id=${Cookies.get('userId')}`)
      setExtras(data.month.extraHours)
    } catch (e) {

    }
  }, [])

  const createExtra = async (month: string, year: string) => {
    try {
      console.log(month, year)
      await axios.post(`/api/extras/month?month=${month}-${year}&id=${Cookies.get('userId')}`)
      handleExtras()
      showAlert({
        severity: 'success',
        title: 'Extra criado com sucesso'
      })
      setSending(true)
    } catch(e) {

    } finally {
      setSending(false)
    }
  }

  const handleCloseModal = () => {
    setOpenDialog(false)
    setMonth('')
    setYear('')
  }

  useEffect(() => {
    const isMounted = true

    if (!isMounted) return

    handleExtras()
  }, [handleExtras])

  return (
    <Styles.Container className={props.className} >
      <Layout
        lowerBarProps={{
          breadcrumbs: [
            {
              text: 'Extras',
              href: '/extra-hours'
            }
          ],
          icon: <MdMonetizationOn size={50} title="MyProfile" />,
          mainButton: {
            text: 'Adicionar',
            model: 'primary',
            onClick: () => setOpenDialog(true),
            leftIcon: <FaPlus size={20} title="Adicionar extra" />
          }
        }}
      >
        <Styles.Content>
          {!!extras.length ? (
            'Tem'
          ) : (
            <Heading size="xl" >
              <h3>
                Sem nada por aqui parça, bora trabalhar pô
              </h3>
            </Heading>
          )}
        </Styles.Content>
      </Layout>
      {openDialog && (
        <Dialog
          onClose={() => setOpenDialog(false)}
          allowOverlayClick={false}
          title="Informe sobre qual mês é esse extra"
          jsx={<Styles.ExtraContainer>
            <InputComponent
              label='Mês'
              value={month}
              onChange={e => setMonth(e.target.value)}
              placeholder="Insira o mês desse extra"
            />
            <InputComponent
              label='Ano'
              mask="99"
              value={year}
              onChange={e => setYear(e.target.value)}
              placeholder="Insira o ano referente a esse mês"
            />
          </Styles.ExtraContainer>}
          mainButton={{
            model: 'primary',
            text: 'Criar extra',
            leftIcon: <FcMoneyTransfer size={20} title="Criar extra" />,
            onClick: () => {
              createExtra(month, year)
              handleCloseModal()
            },
            disabled: month == '' || year.length < 2
          }}
          secondaryButton={{
            model: 'other',
            text: 'Cancelar',
            onClick: handleCloseModal
          }}
        />
      )}
      <Loader show={sending} />
    </Styles.Container>
  )
}

export default ExtraHoursList