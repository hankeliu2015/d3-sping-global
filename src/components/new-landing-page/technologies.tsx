import React from 'react'
import Image from 'next/image'
import GatsbyIcon from '@images/technologies/gatsby.png'
import WebflowIcon from '@images/technologies/webflow.png'
import ZoomIcon from '@images/technologies/zoom.png'
import GdriveIcon from '@images/technologies/gdrive.png'
import ReactIcon from '@images/technologies/react.png'
import NotionIcon from '@images/technologies/notion.png'
import SlackIcon from '@images/technologies/slack.png'
import Donorbox1Icon from '@images/technologies/donorbox1.png'

export default function Technologies(): JSX.Element {
    return (
        <div className="technologies">
            <h2 className="technologies__header">Streamline your operations and reach more donors with the latest technology</h2>
            <div className="technologies__content">
                <Image src={GatsbyIcon} width={296} height={296} alt='gatsby icon'></Image>
                <Image src={WebflowIcon} width={296} height={296} alt='weblow icon'></Image>
                <Image src={ZoomIcon} width={296} height={296} alt='zoom icon'></Image>
                <Image src={GdriveIcon} width={296} height={296} alt='gDrive icon'></Image>
                <Image src={ReactIcon} width={296} height={296} alt='react icon'></Image>
                <Image src={NotionIcon} width={296} height={296} alt='Notion icon'></Image>
                <Image src={SlackIcon} width={296} height={296} alt='Slack icon'></Image>
                <Image src={Donorbox1Icon} width={296} height={296} alt='Donorbox icon'></Image>
            </div>
        </div>
    )
}
