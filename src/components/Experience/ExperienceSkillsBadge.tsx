import React from 'react'
import './Experience.scss'

interface Props {
    skills: string[]
}

export const ExperienceSkillsbadge = ({ skills }: Props) => {
    return (
        <>
            {
                skills.map((e, id) => {
                    return (
                        <div className='experience-skills-badge-container' key={id}>
                            <div className='experience-skills-badge'>
                                {e}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}