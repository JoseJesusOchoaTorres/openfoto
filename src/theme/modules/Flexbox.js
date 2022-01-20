import { css } from 'styled-components'

export const Flexbox = css`
  .flex {
    display: flex;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .horizontal {
    &-left {
      justify-content: flex-start;
    }

    &-center {
      justify-content: center;
    }

    &-right {
      justify-content: flex-end;
    }

    &-around {
      justify-content: space-around;
    }

    &-between {
      justify-content: space-between;
    }

    &-evenly {
      justify-content: space-evenly;
    }
  }

  .vertical {
    &-top {
      align-items: flex-start;
    }

    &-center {
      align-items: center;
    }

    &-bottom {
      align-items: flex-end;
    }
  }

`