import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context";

export default function TransactionForm({ onClose, isOpen }) {

    const {formData, setFormData, value, setValue, handleFormSubmit} = useContext(GlobalContext);

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input placeholder="Enter transaction description" name="description" type="text" onChange={handleFormChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input placeholder="Enter transaction amount" name="amount" type="number" onChange={handleFormChange} />
                        </FormControl>
                        <RadioGroup mt={'5'} value={value} onChange={setValue}>
                            <Radio value="income" colorScheme="green" name="type" checked={formData.type === 'income'} onChange={handleFormChange}>Income</Radio>
                            <Radio value="expense" colorScheme="red" name="type" checked={formData.type === 'expense'} onChange={handleFormChange}>Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button type="submit" onClick={onClose}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
}