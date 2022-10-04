import React, { useRef } from 'react'
import { ISearchHeaderProps } from '../video_item/video_item_type'
import styles from './search_header.module.css'

function SearchHeader({onSearch, onLogoClick}: ISearchHeaderProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSearchClick = () => {
        if (inputRef?.current?.value) {
            onSearch(inputRef.current.value)
        }
    }

    const onEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            handleSearchClick()
        }
    }

  return (
    <>
        <header className={styles.header}>
            <div className={styles.logo} onClick={onLogoClick}>
                <img src='/images/logo.png' alt='logo' />
                <h1>Youtube</h1>
            </div>
            <input type="search" className={styles.input} placeholder='search...' ref={inputRef} onKeyPress={onEnter} />
            <button className={styles.button} onClick={handleSearchClick}>
                <img className={styles.buttonImg} src='/images/search.png' alt='search' />
            </button>
        </header>
    </>
  )
}

export default SearchHeader