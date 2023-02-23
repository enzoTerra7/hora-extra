import React, { useState, useEffect, useCallback } from 'react'
import { MdDeleteForever, MdMonetizationOn } from 'react-icons/md'
import * as Styles from 'styles/pages/ExtraHours/List/styles'
import { FaMoneyBill, FaPen, FaPlus, FaTrash } from 'react-icons/fa'
import { Layout } from 'components/layouts/layout/main'
import { Loader } from 'components/Loader'
import { useAlert } from 'src/hooks/useAlert'
import { GetStaticPaths, GetStaticProps } from 'next'
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
import { getAllWorks, getWorkById } from 'lib/Works/work'
import { ColumnProps, Table } from 'components/Table'
import { IconButton } from 'components/IconButton'
import { useDialog } from 'src/hooks/useDialog'

export interface WorksListProps {
  className?: string
  id?: string | number
  works: ExtrasType
}

export interface ExtrasType {
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

const ExtraHoursList = (props: WorksListProps) => {

  const { showAlert } = useAlert()
  const { showDialog } = useDialog()
  const router = useRouter()
  console.log(props)

  const [sending, setSending] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [openDialogEdit, setOpenDialogEdit] = useState(false)
  const [idToEdit, setIdToEdit] = useState(-1)
  const [start, setStart] = useState('')
  const [exit, setExit] = useState('')
  const [extraWorks, setExtraWorks] = useState<Works[]>(props.works.works || [])

  const handleWorks = async () => {
    try {
      const { data } = await axios.get(`/api/extras/extra/works?id=${props.id}`)
      console.log(data)
      setExtraWorks(data.work)
      showAlert({
        severity: 'success',
        title: 'Extra criado com sucesso'
      })
    } catch (e) {

    } finally {
      setSending(false)
    }
  }

  const createWork = async (start: string, ending: string) => {
    try {
      setSending(true)
      await axios.post(`/api/extras/extra/works?start=${start}&ending=${ending}&id=${props.id}`)
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

  const editWork = async (start: string, ending: string, id: string | number) => {
    try {
      setSending(true)
      await axios.put(`/api/extras/extra/works?start=${start}&ending=${ending}&id=${id}`)
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

  const deleteWork = async (id: string | number) => {
    try {
      setSending(true)
      await axios.delete(`/api/extras/extra/works?id=${id}`)
      handleWorks()
      showAlert({
        severity: 'success',
        title: 'Extra deletado com sucesso'
      })
    } catch (e) {

    } finally {
      setSending(false)
    }
  }

  const handleCloseModal = () => {
    setOpenDialog(false)
    setOpenDialogEdit(false)
    setStart('')
    setExit('')
    setIdToEdit(-1)
  }

  const Columns: ColumnProps[] = [
    {
      key: '0',
      title: 'Entrada',
      render: (data) => new Date(data.entrace).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(', ').join(' as ')
    },
    {
      key: '1',
      title: 'Saída',
      render: (data) => new Date(data.exit).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(', ').join(' as ')
    },
    {
      key: '2',
      title: 'Total',
      render: (data) => data.total
    },
    {
      key: '3',
      title: 'Ações',
      width: '130px',
      render: (data) => 
        <div className="actionsContainer">
          <IconButton
            model="primary"
            icon={<FaPen size={20} title="Editar"/>}
            onClick={() => {
              setStart(data.entrace)
              setExit(data.exit)
              setIdToEdit(data.id)
              setOpenDialogEdit(true)
            }}
          />
          <IconButton
            model="primary"
            icon={<MdDeleteForever size={20} title="Remover"/>}
            onClick={() => showDialog({
              error: true,
              img: <MdDeleteForever size={50} title="Remover" />,
              title: `Deseja mesmo apagar essas horas?`,
              message: 'Se confirmar, todos os dados dele serão perdidos.',
              mainButton: {
                model: 'error',
                text: 'Apagar',
                leftIcon: <FaTrash size={20} title="Remover" />,
                onClick: () => deleteWork(data.id)
              }
            })}
          />
        </div>
    },
  ]

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
              text: Cookies.get('month') || '', //window?.localStorage?.getItem('month')
              href: `/extra-hours/view/${Cookies.get('month-id')}`
            },
            {
              text: props.works.description,
              href: ''
            }
          ],
          icon: <MdMonetizationOn size={50} title="Extras" />,
          mainButton: {
            text: 'Adicionar serviço',
            model: 'primary',
            onClick: () => setOpenDialog(true),
            leftIcon: <FaPlus size={20} title="Adicionar serviço" />
          },
          secondaryButton: {
            text: 'Voltar',
            model: 'secondary',
            onClick: () => router.push(`/extra-hours/view/${Cookies.get('month-id')}`)
          }
        }}
      >
        {!!extraWorks.length ? (
          <Table
            data={extraWorks}
            withoutPagination
            title='Veja suas entradas e saídas'
            columns={Columns}
          />
        ) : (
          <Styles.Content>
            <Heading size="xl" >
              <h3>
                Sem nada por aqui parça, bora trabalhar pô
              </h3>
            </Heading>
          </Styles.Content>
        )}
      </Layout>
      <Loader show={sending} />
      {openDialog && (
        <Dialog
          onClose={() => setOpenDialog(false)}
          allowOverlayClick={false}
          title="Informe sua entrada e saída nesse extra"
          jsx={<Styles.ExtraContainer>
            <InputComponent
              label='Entrada'
              type="datetime-local"
              value={start}
              onChange={e => setStart(e.target.value)}
              placeholder="Insira a data de inicio desse serviço"
              inputShrink
            />
            <InputComponent
              label='Saída (pode ser adicionado depois)'
              type="datetime-local"
              value={exit}
              onChange={e => setExit(e.target.value)}
              placeholder="Insira a data de finalização do serviço"
              inputShrink
            />
          </Styles.ExtraContainer>}
          mainButton={{
            model: 'primary',
            text: 'Adicionar serviço',
            leftIcon: <FaMoneyBill size={20} title="Adicionar serviço" />,
            onClick: () => {
              createWork(start, exit)
              handleCloseModal()
            },
            disabled: start == ''
          }}
          secondaryButton={{
            model: 'other',
            text: 'Cancelar',
            onClick: handleCloseModal
          }}
        />
      )}
      {openDialogEdit && (
        <Dialog
          onClose={() => setOpenDialogEdit(false)}
          allowOverlayClick={false}
          title="Edita sua entrada e saída nesse extra"
          jsx={<Styles.ExtraContainer>
            <InputComponent
              label='Entrada'
              type="datetime-local"
              value={start}
              onChange={e => setStart(e.target.value)}
              placeholder="Insira a data de inicio desse serviço"
              inputShrink
            />
            <InputComponent
              label='Saída (pode ser adicionado depois)'
              type="datetime-local"
              value={exit}
              onChange={e => setExit(e.target.value)}
              placeholder="Insira a data de finalização do serviço"
              inputShrink
            />
          </Styles.ExtraContainer>}
          mainButton={{
            model: 'primary',
            text: 'Editar serviço',
            leftIcon: <FaPen size={20} title="Editar serviço" />,
            onClick: () => {
              editWork(start, exit, idToEdit)
              handleCloseModal()
            },
            disabled: start == ''
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
  const allIds = await getAllWorks()
  const paths = [];
  await allIds.forEach((id) => { paths.push(`/extra-hours/view/service-details/${id.id}`) })
  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { id } = props.params;

  try {
    const data = await getWorkById(id as string);
    console.log('retorno do props', data)
    return data ? {
      props: {
        className: '',
        id: id,
        works: data
      }
    } : { notFound: true };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}