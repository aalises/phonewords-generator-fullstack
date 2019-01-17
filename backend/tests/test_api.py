import pytest

def test_phoneword(client):
    data = client.get('/api/v1/phonewords/667').get_json()

    assert data["success"] == True
    assert data["error"] == ''
    assert len(data['phonewords']) == 36

def test_another_phoneword(client):
    data = client.get('/api/v1/phonewords/79').get_json()

    assert data["success"] == True
    assert data["error"] == ''
    assert len(data['phonewords']) == 16

def test_invalid_phoneword_with_letter(client):
    data = client.get('/api/v1/phonewords/notvalid').get_json()
    assert data["success"] == False
    assert data["error"] == 'Phone number not valid. Has to contain only digits and no 0/1'

def test_invalid_phoneword_with_1_0(client):
    data = client.get('/api/v1/phonewords/631').get_json()
    assert data["success"] == False
    assert data["error"] == 'Phone number not valid. Has to contain only digits and no 0/1'

    data = client.get('/api/v1/phonewords/630').get_json()
    assert data["success"] == False






