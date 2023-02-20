import { Layout } from 'components/layouts/layout/main'
import React, { useState, useEffect } from 'react'
import { MdOtherHouses } from 'react-icons/md'
import * as Styles from 'styles/pages/Dashboard/styles'

export interface DashboardProps {
  className?: string
}

const Dashboard = (props: DashboardProps) => {
  return(
    <Styles.Container className={props.className} >
      <Layout
        lowerBarProps={{
          breadcrumbs: [
            {
              text: 'Dashboard',
              href: '/dashboard'
            }
          ],
          icon: <MdOtherHouses size={50} title="Dashboard" />
        }}
      >
        <Styles.Container>
          Oi
        </Styles.Container>
      </Layout>
    </Styles.Container>
  )
}

export default Dashboard