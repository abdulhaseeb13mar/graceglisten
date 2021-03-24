import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePickerr from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/FontAwesome5';


class DatePicker extends Component {
    render() {
        const {
            label,
            onSelect,
            selectedItem,
            onRef
        } = this.props;

        return (
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.label}>{label}</Text>
                <Icon name='chevron-down'/>
                <DatePickerr
                ref={input => {
                    this.DatePicker = input;
                    onRef(input);
                  }}
                    style={{ width: '100%' }}
                    date={selectedItem ? moment(selectedItem).format('DD-MM-YYYY') : ''}
                    mode="date"
                    format="DD-MM-YYYY"
                    confirmBtnText={translate('confirm')}
                    cancelBtnText={translate('cancel')}
                    placeholder={translate('selectDate')}
                    showIcon={false}
                    customStyles={{
                        dateInput: styles.dropdown,
                        placeholderText: {...styles.dropdownText},
                        dateText: styles.dropdownText,
                        btnTextConfirm:{
                            color:Color.secondary
                        },
                        btnTextCancel:{
                            color:Color.secondary
                        }
                    }}
                    onDateChange={onSelect}
                />
            </View>
        );
    }
}

export default DatePicker;
