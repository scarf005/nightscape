type Speech = {
  type: Type
  speaker: SpeakerUnion
  sound: string
  volume: number
}

type SpeakerUnion = SpeakerElement[] | string

type SpeakerElement =
  | "mon_mi_go"
  | "mon_mi_go_slaver"
  | "mon_mi_go_myrmidon"
  | "mon_feral_scientist_scalpel"
  | "mon_feral_labsecurity_9mm"
  | "mon_feral_labsecurity_flashlight"
  | "mon_feral_militia"
  | "mon_feral_prepper"
  | "mon_feral_survivalist"
  | "mon_feral_jackboot"
  | "mon_feral_soldier"
  | "mon_mi_go_surgeon"
  | "mon_mi_go_guard"
  | "mon_prototype_cyborg"
  | "mon_eyebot"
  | "foodperson_mask"
  | "talking_doll"
  | "mon_dog"
  | "mon_dog_bull"
  | "mon_dog_pitbullmix"
  | "mon_dog_beagle"
  | "mon_dog_bcollie"
  | "mon_dog_chihuahua"
  | "mon_dog_gpyrenees"
  | "mon_dog_rottweiler"

type Type = "speech"
