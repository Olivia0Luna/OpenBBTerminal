import base64
import json
import random
from typing import Literal

import pytest
import requests
from openbb_core.env import Env
from openbb_provider.utils.helpers import get_querystring

data = {}


def get_headers():
    if "headers" in data:
        return data["headers"]

    userpass = f"{Env().API_USERNAME}:{Env().API_PASSWORD}"
    userpass_bytes = userpass.encode("ascii")
    base64_bytes = base64.b64encode(userpass_bytes)

    data["headers"] = {"Authorization": f"Basic {base64_bytes.decode('ascii')}"}
    return data["headers"]


def get_data(menu: Literal["stocks", "crypto"]):
    funcs = {"stocks": get_stocks_data, "crypto": get_crypto_data}
    return funcs[menu]()


def request_data(menu: str, symbol: str, provider: str):
    """Randomly pick a symbol and a provider and get data from the selected menu."""
    url = f"http://0.0.0.0:8000/api/v1/{menu}/load?symbol={symbol}&provider={provider}"
    result = requests.get(url, headers=get_headers(), timeout=10)
    return result.json()["results"]


def get_stocks_data():
    if "stocks_data" in data:
        return data["stocks_data"]

    symbol = random.choice(["AAPL", "NVDA", "MSFT", "TSLA", "AMZN", "V"])  # noqa: S311
    provider = random.choice(["fmp", "intrinio", "polygon", "yfinance"])  # noqa: S311

    data["stocks_data"] = request_data("stocks", symbol=symbol, provider=provider)
    return data["stocks_data"]


def get_crypto_data():
    if "crypto_data" in data:
        return data["crypto_data"]

    # TODO : add more crypto providers and symbols
    symbol = random.choice(["BTC"])  # noqa: S311
    provider = random.choice(["fmp"])  # noqa: S311

    data["crypto_data"] = request_data(
        menu="crypto",
        symbol=symbol,
        provider=provider,
    )
    return data["crypto_data"]


@pytest.mark.parametrize(
    "params, data_type",
    [
        ({"data": "", "target": "close"}, "stocks"),
        ({"data": "", "target": "high"}, "crypto"),
    ],
)
@pytest.mark.integration
def test_qa_normality(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/normality?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        ({"data": "", "target": "close"}, "stocks"),
        ({"data": "", "target": "high"}, "crypto"),
    ],
)
@pytest.mark.integration
def test_qa_capm(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/capm?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        (
            {
                "data": "",
                "target": "close",
                "threshold_start": "",
                "threshold_end": "",
            },
            "stocks",
        ),
        (
            {
                "data": "",
                "target": "high",
                "threshold_start": "0.1",
                "threshold_end": "1.6",
            },
            "crypto",
        ),
    ],
)
@pytest.mark.integration
def test_qa_om(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/om?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        ({"data": "", "target": "close", "window": "5"}, "stocks"),
        ({"data": "", "target": "high", "window": "10"}, "crypto"),
    ],
)
@pytest.mark.integration
def test_qa_kurtosis(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/kurtosis?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        (
            {
                "data": "",
                "target": "close",
                "fuller_reg": "c",
                "kpss_reg": "ct",
            },
            "stocks",
        ),
        (
            {
                "data": "",
                "target": "high",
                "fuller_reg": "ct",
                "kpss_reg": "c",
            },
            "crypto",
        ),
    ],
)
@pytest.mark.integration
def test_qa_unitroot(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/unitroot?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        ({"data": "", "target": "close", "rfr": "", "window": ""}, "stocks"),
        ({"data": "", "target": "high", "rfr": "0.5", "window": "250"}, "crypto"),
    ],
)
@pytest.mark.integration
def test_qa_sh(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/sh?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        (
            {
                "data": "",
                "target": "close",
                "target_return": "",
                "window": "",
                "adjusted": "",
            },
            "stocks",
        ),
        (
            {
                "data": "",
                "target": "close",
                "target_return": "0.5",
                "window": "275",
                "adjusted": "true",
            },
            "crypto",
        ),
    ],
)
@pytest.mark.integration
def test_qa_so(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/so?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        ({"data": "", "target": "close", "window": "220"}, "stocks"),
    ],
)
@pytest.mark.integration
def test_qa_skew(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/skew?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=60, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        (
            {
                "data": "",
                "target": "close",
                "window": "10",
                "quantile_pct": "",
            },
            "stocks",
        ),
        (
            {
                "data": "",
                "target": "high",
                "window": "50",
                "quantile_pct": "0.6",
            },
            "crypto",
        ),
    ],
)
@pytest.mark.integration
def test_qa_quantile(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/quantile?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200


@pytest.mark.parametrize(
    "params, data_type",
    [
        ({"data": "", "target": "close"}, "stocks"),
        ({"data": "", "target": "high"}, "crypto"),
    ],
)
@pytest.mark.integration
def test_qa_summary(params, data_type):
    params = {p: v for p, v in params.items() if v}
    data = json.dumps(get_data(data_type))

    query_str = get_querystring(params, [])
    url = f"http://0.0.0.0:8000/api/v1/qa/summary?{query_str}"
    result = requests.post(url, headers=get_headers(), timeout=10, data=data)
    assert isinstance(result, requests.Response)
    assert result.status_code == 200
