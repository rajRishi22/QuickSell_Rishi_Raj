import { BiRadioCircle } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": 
            return (
                <div className="icon-wrapper">
                    <LuMoreHorizontal color="#797d84" size={14} />
                    <span className="tooltip">No Priority</span>
                </div>
            );
        case "Low": 
            return (
                <div className="icon-wrapper">
                    <BiSignal2 color='#6b6f76' size={14} />
                    <span className="tooltip">Low Priority</span>
                </div>
            );
        case "Medium": 
            return (
                <div className="icon-wrapper">
                    <BiSignal3 color='#6b6f76' size={14} />
                    <span className="tooltip">Medium Priority</span>
                </div>
            );
        case "High": 
            return (
                <div className="icon-wrapper">
                    <BiSignal4 color='#6b6f76' size={14} />
                    <span className="tooltip">High Priority</span>
                </div>
            );
        case "Urgent": 
            return (
                <div className="icon-wrapper">
                    <AiFillWarning color='#fc7840' size={14} />
                    <span className="tooltip">Urgent</span>
                </div>
            );
        default: 
            return (
                <div className="icon-wrapper">
                    <AiFillWarning color='#fc7840' size={14} />
                    <span className="tooltip">Unknown Priority</span>
                </div>
            );
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": 
            return (
                <div className="icon-wrapper">
                    <BiRadioCircle color='#e2e2e2' size={24} />
                    <span className="tooltip">Backlog</span>
                </div>
            );
        case "Todo": 
            return (
                <div className="icon-wrapper">
                    <BiRadioCircle color='#e2e2e2' size={24} />
                    <span className="tooltip">Todo</span>
                </div>
            );
        case "In progress": 
            return (
                <div className="icon-wrapper">
                    <TbProgress color='#f1ca4b' size={16} />
                    <span className="tooltip">In Progress</span>
                </div>
            );
        case "Done": 
            return (
                <div className="icon-wrapper">
                    <IoCheckmarkDoneCircle color='#5e6ad2' size={16} />
                    <span className="tooltip">Done</span>
                </div>
            );
        case "Canceled": 
            return (
                <div className="icon-wrapper">
                    <AiFillCloseCircle color='#94a2b3' size={16} />
                    <span className="tooltip">Canceled</span>
                </div>
            );
        default: 
            return (
                <div className="icon-wrapper">
                    <AiFillCloseCircle color='#94a2b3' size={16} />
                    <span className="tooltip">Unknown Status</span>
                </div>
            );
    }
}