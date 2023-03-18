import { HeaderContainter, HeaderContent, NewTransactionButton } from './styles'
import logoimg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainter>
      <HeaderContent>
        <img src={logoimg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton> Nova transação </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainter>
  )
}
