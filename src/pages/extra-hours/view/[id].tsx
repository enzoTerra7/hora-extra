import React, { useState, useEffect, useCallback } from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import * as Styles from 'styles/pages/ExtraHours/List/styles'
import { FaPlus } from 'react-icons/fa'
import { Layout } from 'components/layouts/layout/main'
import { Loader } from 'components/Loader'
import { useAlert } from 'src/hooks/useAlert'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllUserExtra, getExtraById } from 'lib/Extras/month'
import { Accordion, AccordionComponentProp } from 'components/Accordion'
import { ButtonComponent } from 'components/Button'
import { AiFillEye } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { Heading } from 'components/Heading'
import { Dialog } from 'components/Dialog'
import { InputComponent } from 'components/Input'
import { GrUserWorker } from 'react-icons/gr'
import axios from 'axios'
import Cookies from 'js-cookie'

export interface ExtraHoursListProps {
  className?: string
  id?: string | number
  extra: ExtrasType
}

export interface ExtrasType {
  id: number
  month: string
  total: number
  ExtraWorks: ExtraWorks[]
}

export interface ExtraWorks {
  id: number | string
  date: string
  extraHoursId: number
  description: string
  total: string | number
  works: Works[]
}

export interface Works {
  id: number | string
  entrace: string | number
  exit: string | number
  total: string | number
}

const ExtraHoursList = (props: ExtraHoursListProps) => {

  const { showAlert } = useAlert()
  const router = useRouter()

  const [sending, setSending] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [extraWorks, setExtraWorks] = useState<AccordionComponentProp[]>([...props.extra.ExtraWorks.map((extra) => ({
    expanded: String(extra.id),
    title: '',
    step: extra.description,
    details: <Styles.Details>
      <span className="total">
        Você teve um total de <strong> {extra.total} </strong> horas extras este mês.
      </span>
      <ButtonComponent
        model="primary"
        text="Ver detalhes"
        leftIcon={<AiFillEye size={20} title="Ver detalhes" />}
        onClick={() => router.push(`/extra-hours/view/${extra.id}`)}
      />
    </Styles.Details>
  }))])

  const handleWorks = async () => {
    try {
      const { data } = await axios.post(`/api/extras/extra?id=${Cookies.get('userId')}`)
      console.log(data)
      showAlert({
        severity: 'success',
        title: 'Extra criado com sucesso'
      })
    } catch (e) {

    } finally {
      setSending(false)
    }
  }

  const createWork = async (date: string, description: string) => {
    try {
      setSending(true)
      console.log(date, description)
      await axios.post(`/api/extras/extra?date=${date}&description=${description}&id=${props.id}`)
      handleWorks()
      showAlert({
        severity: 'success',
        title: 'Extra criado com sucesso'
      })
    } catch (e) {

    } finally {
      setSending(false)
    }
  }

  const handleCloseModal = () => {
    setOpenDialog(false)
    setDate('')
    setDescription('')
  }

  return (
    <Styles.Container className={props.className} >
      <Layout
        lowerBarProps={{
          breadcrumbs: [
            {
              text: 'Extras',
              href: '/extra-hours'
            },
            {
              text: props.extra.month,
              href: ''
            }
          ],
          icon: <MdMonetizationOn size={50} title="Extras" />,
          mainButton: {
            text: 'Adicionar serviço',
            model: 'primary',
            onClick: () => setOpenDialog(true),
            leftIcon: <FaPlus size={20} title="Adicionar serviço" />
          }
        }}
      >
        <Styles.Content>
          {!!extraWorks.length ? (
            <Accordion
              steps={extraWorks}
            />
          ) : (
            <Heading size="xl" >
              <h3>
                Sem nada por aqui parça, bora trabalhar pô
              </h3>
            </Heading>
          )}
        </Styles.Content>
      </Layout>
      <Loader show={sending} />
      {openDialog && (
        <Dialog
          onClose={() => setOpenDialog(false)}
          allowOverlayClick={false}
          title="Informe sobre qual mês é esse extra"
          jsx={<Styles.ExtraContainer>
            <InputComponent
              label='Data'
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              placeholder="Insira a data desse serviço"
            />
            <InputComponent
              label='Descrição'
              multiline
              rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Insira a descrição do serviço realizado"
            />
          </Styles.ExtraContainer>}
          mainButton={{
            model: 'primary',
            text: 'Adicionar serviço',
            leftIcon: <GrUserWorker size={20} title="Adicionar serviço" />,
            onClick: () => {
              createWork(date, description)
              handleCloseModal()
            },
            disabled: date == '' || description == ''
          }}
          secondaryButton={{
            model: 'other',
            text: 'Cancelar',
            onClick: handleCloseModal
          }}
        />
      )}
    </Styles.Container>
  )
}

export default ExtraHoursList

export const getStaticPaths: GetStaticPaths = async (props) => {
  const allIds = await getAllUserExtra()
  const paths = [];
  await allIds.forEach((id) => { paths.push(`/extra-hours/view/${id.id}`) })
  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { id } = props.params;

  try {
    const data = await getExtraById(id as string);
    console.log('retorno do props', data)
    return data ? {
      props: {
        className: '',
        id: id,
        extra: data
      }
    } : { notFound: true };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}