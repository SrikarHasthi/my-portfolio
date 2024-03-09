import React, { useState } from 'react'
import './Experience.scss'

interface Props {
    skills: string[]
}

export const ExperienceSkillsbadge = ({ skills }: Props) => {
    return (
        <>
            {
                skills.map((e) => {
                    return (
                        <div className='experience-skills-badge-container'>
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