import pytest

def test_paths(client):
    path_docs = client.get('/docs')
    path_api = client.get('/api/v1/phonewords/7')
    path_non_existant = client.get('/not_found')

    assert path_docs.status_code != 404 and path_api.status_code != 404
    assert path_non_existant.status_code == 404

def test_phoneword(client):
    data = client.get('/api/v1/phonewords/667').get_json()

    assert data["success"]
    assert data["error"] == ''
    assert len(data['phonewords']) == 36

def test_another_phoneword(client):
    data = client.get('/api/v1/phonewords/79').get_json()

    assert data["success"]
    assert data["error"] == ''
    assert len(data['phonewords']) == 16

def test_invalid_phoneword_with_letter(client):
    data = client.get('/api/v1/phonewords/notvalid').get_json()
    assert not data["success"]
    assert data["error"] == 'Phone number not valid. Has to contain only digits and no 0/1, maximum length 9'

def test_invalid_phoneword_with_1_0(client):
    data = client.get('/api/v1/phonewords/631').get_json()
    assert not data["success"]
    assert data["error"] == 'Phone number not valid. Has to contain only digits and no 0/1, maximum length 9'

    data = client.get('/api/v1/phonewords/630').get_json()
    assert not data["success"]
