export type ApiParameters = {
  apiPort: number
  maxResponseToken: number;
  temperature: number;
  topP: number;
  presencePenalty: number;
  frequencyPenalty: number;
}
export type Device = 'CPU' | 'CUDA' | 'CUDA-Beta' | 'WebGPU' | 'MPS' | 'Custom';
export type Precision = 'fp16' | 'int8' | 'fp32';
export type ModelParameters = {
  // different models can not have the same name
  modelName: string;
  device: Device;
  precision: Precision;
  storedLayers: number;
  maxStoredLayers: number;
  useCustomCuda?: boolean;
  customStrategy?: string;
  useCustomTokenizer?: boolean;
  customTokenizer?: string;
}
export type ModelConfig = {
  // different configs can have the same name
  name: string;
  apiParameters: ApiParameters;
  modelParameters: ModelParameters;
  enableWebUI?: boolean;
}